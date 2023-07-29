import { createContext,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import { IClient, IClientContext, IClientProviderProps } from './@types';



export const ClientContext = createContext<IClientContext>({} as IClientContext);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [client, setClient] = useState<IClient | null>(null);


  
  const registerClient = async (data: IClient): Promise<void> => {
    try {
      const response = await api.post('/clients', data);
      console.log(response.data)
      setClient(response.data.client);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider value={{
        client,
    
        registerClient,}} >
      {children}
    </ClientContext.Provider>
  );
};
