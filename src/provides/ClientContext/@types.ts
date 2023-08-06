import { IContact } from "../ContactContext/@types";

export interface IClient {
  id?: number;
  full_name: string;
  email: string;
  password: string;
  contacts?: IContact[];
  phone?: string;
}

export interface IUpdateProfile {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface IClientProviderProps {
  children: React.ReactNode;
}

export interface IClientContext {
  client: IClient | null;
  contacts: IContact[] | null;
  logout: () => void;
  setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  loginClient: (data: IClient) => Promise<void>;
  registerClient: (data: IClient) => Promise<void>;
  isLoading: boolean;
}
