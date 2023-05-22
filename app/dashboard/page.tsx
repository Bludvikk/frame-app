"use client";

import { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BellRing,
  CreditCard,
  DollarSign,
  Download,
  MapPin,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { map } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { usePopOverStore } from "../components/store/store";

const Dashboard = () => {
  const { businesses, fetchBusinessesByOrganization, selectedOrganization } =
    usePopOverStore();

  useEffect(() => {
    if (selectedOrganization) {
      fetchBusinessesByOrganization(selectedOrganization?.id);
    }
  }, [selectedOrganization, fetchBusinessesByOrganization]);

  console.log(businesses);
  return (
    <Layout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl text-black font-semibold tracking-tight">
            Dashboard:
            <h1 className="font-thin text-2xl">{selectedOrganization?.name}</h1>
          </h2>
        </div>
        <Tabs className="w-2/4">
          <TabsList className="grid w-full grid-cols-3">
            {businesses &&
              businesses.length > 0 &&
              businesses.map((business, i) => {
                return (
                  <TabsTrigger key={i} value={business.name} className="px-2">
                    {business.name}
                  </TabsTrigger>
                );
              })}
          </TabsList>
          {businesses.length > 0 &&
            businesses.map((business) => (
              <TabsContent value={business.name}>
                {/* <table className="min-w-full">
              <thead className="bg-slate-200 rounded-s-2xl">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                  >
                    Provider: {business.provider.name}
                    
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                  >
                    Application: {business.app.name}
                    
                  </th>
                  
                </tr>
              </thead>
            </table> */}
                <Card>
                  <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                    <CardDescription>
                      Business Type: {business.businessType.name}
                    </CardDescription>
                    <CardDescription>
                      Provider: {business.provider.name}
                    </CardDescription>
                    <CardDescription>
                      Application: {business.app.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <MapPin />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Location
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Add Locations to for this business
                        </p>
                      </div>
                      <Button variant='outline'>
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
