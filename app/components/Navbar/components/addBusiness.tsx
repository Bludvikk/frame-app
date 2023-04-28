"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { usePopOverStore } from "../../store/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Reference {
  id: string;
  name: string;
}

const businessSchema = z.object({
  name: z.string(),
  appID: z.number(),
  providerId: z.number(),
  businessTypeId: z.number(),
})

export type IBusinessSchema = z.infer<typeof businessSchema>

const AddBusiness = () => {
  const { createBusiness, selectedOrganization } = usePopOverStore();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IBusinessSchema>({
    defaultValues: {
      name: "",
      appID: 0,
      providerId: 0,
      businessTypeId: 0,
    },
    mode: "onChange",
    resolver: zodResolver(businessSchema)
  });

  console.log(watch());

  const [businessTypes, setBusinessTypes] = useState<Reference[]>([]);
  const [appTypes, setAppTypes] = useState<Reference[]>([]);
  const [providers, setProviders] = useState<Reference[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const businessTypeResponse = await axios.get(
          `api/getReferences?id=${3}`
        );
        setBusinessTypes(businessTypeResponse.data);

        const appTypeResponse = await axios.get(`api/getReferences?id=${1}`);
        setAppTypes(appTypeResponse.data);

        const providerResponse = await axios.get(`api/getReferences?id=${2}`);
        setProviders(providerResponse.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onSubmit: SubmitHandler<IBusinessSchema> = async (data) => {
    const { name, appID, businessTypeId, providerId } = data;
  
    if (!name || !appID || !businessTypeId || !providerId) {
      console.error("All fields are required");
      return;
    }
  
    try {
      // Call createBusiness function from your zustand store here
      // Pass the name, selected organization, app, businessType, and provider as arguments
      await createBusiness(name, appID, businessTypeId, providerId, selectedOrganization);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(selectedOrganization?.id && selectedOrganization?.name)
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Business</Button>
      </DialogTrigger>
      
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Business</DialogTitle>
            <DialogDescription>
              Add a business and choose an application
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="BusinessName" className="text-right">
                Business Name
              </Label>
              <Input
                id="BusinessName"
                className="col-span-3"
                {...register("name", {
                  required: true,
                  minLength: 1,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="businessType" className="text-right">
                Business Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Business Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {businessTypes.length > 0 &&
                      businessTypes.map((bt) => (
                        <Controller 
                        control={control}
                        name='businessTypeId'
                        render={({ field: { onChange} }) => (
                          <SelectItem
                          onChange={onChange}
                          id="BusinessTypeId"
                          value={bt.id}
                        >
                          {bt.name}
                        </SelectItem>
                        )}
                        
                        />
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="provider" className="text-right">
                Provider
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Provider</SelectLabel>
                    {providers.length > 0 &&
                      providers.map((prov) => (
                        <SelectItem
                          id={prov.id}
                          value={prov.id}
                          {...register("providerId", { required: false })}
                        >
                          {prov.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Applications
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Choose Applications" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Applications</SelectLabel>
                    {appTypes.length > 0 &&
                      appTypes.map((app) => (
                        <SelectItem
                          value={app.id}
                          {...register("appID", { required: true })}
                        >
                          {app.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          
        </DialogContent>
      
    </Dialog>
  );
};

export default AddBusiness;
