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
import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { usePopOverStore } from "../../store/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
interface Reference {
  id: number;
  name: string;
}

const businessSchema = z.object({
  name: z.string(),
  appID: z.coerce.number(),
  providerId: z.coerce.number(),
  businessTypeId: z.coerce.number(),
  organizationId: z.coerce.number(),
});

export type IBusinessSchema = z.infer<typeof businessSchema>;

const AddBusiness = () => {
  const { selectedOrganization } = usePopOverStore();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm<IBusinessSchema>({
    defaultValues: {
      name: "",
      appID: 0,
      providerId: 0,
      businessTypeId: 0,
      organizationId: 0,
    },
    mode: "onChange",
    resolver: zodResolver(businessSchema),
  });

  console.log(watch());
  console.log(selectedOrganization?.name);

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

  console.log(errors);

  useEffect(() => {
    const organizationId = selectedOrganization?.id;
    setValue("organizationId", organizationId ?? 0);
  }, [selectedOrganization?.id]);

  const onSubmit = async (data: IBusinessSchema) => {
    setIsSubmitting(true);

    console.log("Submit");
    try {
      const { name, appID, businessTypeId, providerId } = data;

      const organizationId = selectedOrganization?.id;

      const response = await fetch("/api/business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          organizationId,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const business = await response.json();
      console.log(business);
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label htmlFor="businessType" className="text-right">
                Business Type
              </Label>
              <Controller 
              control={control}
              name='businessTypeId'
              render={({ field: { onChange, value}}) => (
                <Select value={value.toString()} onValueChange={onChange}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Business Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup> 
                    <SelectLabel> Select Business Type </SelectLabel>
                    {businessTypes.length > 0 && businessTypes.map((bt) => (
                      <SelectItem value={bt.id.toString()}>
                        {bt.name}
                        </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              )}
              
              
              />
              
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="provider" className="text-right">
                Provider
              </Label>
              <Controller 
              control={control}
              name='providerId'
              render={({ field: { onChange, value}}) => (
                <Select value={value.toString()} onValueChange={onChange}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup> 
                  <SelectLabel> Select Provider </SelectLabel>
                    {providers.length > 0 && providers.map((prov) => (
                      <SelectItem value={prov.id.toString()}>
                        {prov.name}
                        </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              )}
              
              
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Applications
              </Label>
              <Controller 
              control={control}
              name='appID'
              render={({ field: { onChange, value}}) => (
                <Select value={value.toString()} onValueChange={onChange}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Business Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup> 
                  <SelectLabel> Select App Type </SelectLabel>
                    {appTypes.length > 0 && appTypes.map((app) => (
                      <SelectItem value={app.id.toString()}>
                        {app.name}
                        </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              )}
              
              
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBusiness;
