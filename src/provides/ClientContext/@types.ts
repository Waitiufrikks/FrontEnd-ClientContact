export interface IClient {
  id?: number;
  full_name: string;
  email: string;
  password: string;
  contacts?:IContact[]
  phone?: number;
}
export interface IContact {
  id?: number;
  full_name: string;
  email: string;
  phone?: number;
}
export interface IUpdateProfile {
  name: string;
  email: string;
  password: string;
  phone?: number;
}

export interface IClientProviderProps {
  children: React.ReactNode;
}

export interface IClientContext {
  client: IClient | null;
  contacts: IContact[] | null
  logout: () => void;
  setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
  loginClient: (data: IClient) => Promise<void>;
  registerClient: (data: IClient) => Promise<void>;
}
