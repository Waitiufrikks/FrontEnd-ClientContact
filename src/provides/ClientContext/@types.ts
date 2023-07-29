export interface IClient {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone?: number;
}
export interface IUpdateProfile {
  name: string;
  email: string;
  phone?: number;
}

export interface IClientProviderProps {
  children: React.ReactNode;
}

export interface IClientContext {
  client: IClient | null;
  loginClient: (data: IClient) => Promise<void>;
  registerClient: (data: IClient) => Promise<void>;

}
