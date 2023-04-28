import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { string, z } from "zod";
import axios from 'axios'
import { AppType } from "next/app";


interface OrgOptions {
  id: number;
  name: string;
  // organizationData: any[];
}

interface Business {
  id: number;
  name: string;
  organizationId: number;
  appId: number;
  businessTypeId: number;
  providerId: number;
}


interface PopoverState {
  organization: OrgOptions[];
  selectedOrganization: OrgOptions | null;
  setSelectedOrganization: (option: OrgOptions | null) => void;
  fetchOrganization: () => Promise<void>;
  businesses: Business[];
  fetchBusinesses: () => Promise<void>;
  fetchBusinessesByOrganization: (organizationId: number) => Promise<void>; 
  createBusiness: (name: string,
    appId: number,
    businessTypeId: number,
    providerId: number,
    selectedOrganization: OrgOptions | null) => Promise<void>;
  // addOrganization: (option: Omit<OrgOptions, "organizationData">) => void;
}

const schema = z.object({
  organizationName: z.string(),
});

export const usePopOverStore = create<PopoverState>((set) => ({
  organization: [],
  businesses: [],
  selectedOrganization: null,
  setSelectedOrganization: (option) => set(() => ({ selectedOrganization: option })),
  fetchOrganization: async () => {
    try {
      const response = await axios.get('/api/organization');
      const data = response.data;
      set(() => ({ organization: data }));
    } catch (error) {
      console.error(error);
    }
  },
  fetchBusinesses: async () => {
    try {
      const response = await axios.get('/api/business');
      const data = response.data;
      set(() => ({ businesses: data }));
    } catch (error) {
      console.error(error);
    }
  },
  fetchBusinessesByOrganization: async (organizationId) => {
    try {
      const response = await axios.get(`/api/business?organizationId=${organizationId}`);
      const data = response.data;
      console.log(data)
      set(() => ({ businesses: data }));
    } catch (error) {
      console.error(error);
    }
  },
  createBusiness: async (name, appId, businessTypeId, providerId, selectedOrganization) => {
    try {
      const response = await axios.post('/api/business', {
        name,
        appId,
        businessTypeId,
        providerId,
        organizationId: selectedOrganization?.id
      }, {
        headers: {
          'Content-Type': 'application/json',// Replace authToken with the actual token value
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // addOrganization: (option) => {
  //   const { organizationName } = schema.parse(option);
  //   const newOrganization = {
  //     organizationId: uuidv4(),
  //     organizationName,
  //     organizationData: [],
  //   };
  //   set((state) => ({
  //     organization: [...state.organization, newOrganization],
  //   }));
  // },
}));
