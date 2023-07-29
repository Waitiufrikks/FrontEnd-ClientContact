import { createContext,  useState } from 'react';
import api from '../../service/api';
import { IClient, IClientContext, IClientProviderProps } from './@types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export const ClientContext = createContext<IClientContext>({} as IClientContext);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginClient = async (data: IClient): Promise<void> => {
    try {
      const response = await api.post('/login', data);
      toast.success('Login successful!');
      window.localStorage.clear();
      window.localStorage.setItem('@TOKEN', response.data.accessToken);
      window.localStorage.setItem('@ID', response.data.client.id);
      setClient(response.data.client);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Invalid login');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  const registerClient = async (data: IClient): Promise<void> => {
    try {
      const response = await api.post('/clients', data);
      toast.success('Registration successfully Complete!');
      setClient(response.data.client);
      navigate('/login');
    } catch (error) {
      toast.error('Invalid registration');
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider value={{
        client,
        loginClient,
        registerClient,}} >
      {children}
    </ClientContext.Provider>
  );
};
