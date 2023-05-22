import { create } from "zustand";
import axios from 'axios'

interface OrgOptions {
  id: number;
  name: string;
}

interface Business {
  id: number;
  name: string;
  organizationId: number;
  appId: number;
  businessTypeId: number;
  providerId: number;
  provider: {
    name: string
  },
  app: {
    name: string
  },
  businessType: {
    name: string
  }

}

interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  status: string;
  role: string
}


interface PopoverState {
  organization: OrgOptions[];
  selectedOrganization: OrgOptions | null;
  setSelectedOrganization: (option: OrgOptions | null) => void;
  fetchOrganization: () => Promise<void>;
  businesses: Business[];
  users: Users[];
  fetchUsers: () => Promise<void>
  fetchBusinesses: () => Promise<void>;
  fetchBusinessesByOrganization: (organizationId: number) => Promise<void>; 
}

export const usePopOverStore = create<PopoverState>((set) => ({
  organization: [],
  businesses: [],
  users: [],
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
  fetchUsers: async () => {
    try {
      const response = await axios.get('/api/users');
      const data = response.data;
      set(() => ({ users: data}));
    } catch (error) {
      console.error(error)
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
}));
