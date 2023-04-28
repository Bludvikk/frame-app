"use client";

import { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { map } from "zod";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { usePopOverStore } from "../components/store/store";
// const appTabs = [
//   {
//     title: "Well",
//     location: [
//       {
//         locationAddress: "Davao",
//       },
//       {
//         locationAddress: "Surigao",
//       },
//     ],
//   },
//   {
//     title: "ExpressPos",
//     location: [
//       {
//         locationAddress: "Manila",
//       },
//       {
//         locationAddress: "Cebu",
//       },
//     ],
//   },
//   {
//     title: "RxPos",
//     location: [
//       {
//         locationAddress: "Batangas",
//       },
//       {
//         locationAddress: "Iloilo",
//       },
//     ],
//   },
// ];



const Dashboard = () => {
  // const { selectedOrganization } = usePopOverStore();

  const { businesses, fetchBusinessesByOrganization, selectedOrganization  } =  usePopOverStore();

  useEffect(() => {
    if (selectedOrganization) {
      fetchBusinessesByOrganization(selectedOrganization?.id);
    } 
  }, [selectedOrganization, fetchBusinessesByOrganization]);



  return (
    <Layout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl text-black font-semibold tracking-tight">
            Dashboard
          </h2>
          {/* <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div> */}
        </div>
        <Tabs className="w-2/4">
          <TabsList className="grid w-full grid-cols-3">
            {/* <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger> */}
              {businesses.length > 0 && businesses.map((tabs) => {
                return (
                  <>
                    <TabsTrigger value={tabs.name} className="px-2">
                      {tabs.name}
                    </TabsTrigger>
                  </>
                );
              })}

          </TabsList>
          {/* {selectedOrganization?.organizationData.map((app) => (
            <TabsContent value={app.application} key={app.application}> */}
              {/* <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 py-4 text-left rounded-md"
                    >
                      Location Address
                    </th>
                  </tr>
                </thead>
                {app.businessLocation &&
                  app.businessLocation.map((loc: { address: string }) => (
                    <tbody key={loc.address}>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {loc.address}
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table> */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Locations</CardTitle>
                  <CardDescription>
                    {app.location.map((loc: { address: string }) => (
                      <CardDescription key={loc.address} className="">
                        {loc.address}
                      </CardDescription>
                    ))}
                  </CardDescription>
                </CardHeader>
              </Card> */}
            {/* </TabsContent>
          ))} */}
        </Tabs>
      </div>

      
    </Layout>
  );
};

export default Dashboard;
