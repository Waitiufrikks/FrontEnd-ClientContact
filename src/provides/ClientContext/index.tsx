import { createContext, useEffect, useState } from "react";
import api from "../../service/api";
import {
  IClient,
  IClientContext,
  IClientProviderProps,
  IUpdateClient,
} from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IContact } from "../ContactContext/@types";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [contacts, setContacts] = useState<IContact[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  const [clientSelect, setClientSelect] = useState<IContact | null>(null);

  const [showModalClient, setShowModalClient] = useState(false);

  const modalClientOpen = (client: IClient | null) => {
    if (client) {
      setClientSelect(client);
    } else {
      setClientSelect(null);
    }
    setShowModalClient((prevShowModal) => !prevShowModal);
  };

  const logout = (): void => {
    localStorage.removeItem("@TOKEN");

    setClient(null);
    navigate("/");
  };

  useEffect(() => {
    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  });
  useEffect(() => {
    if (token) {
      const readerClient = async () => {
        try {
          setIsLoading(true); 
  
          const response = await api.get(`clients/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          setClient(response.data);
          setContacts(response.data.contacts);
          setIsLoading(false); 
        } catch (error) {
          setIsLoading(false); 
          console.log(error);
        }
      };
  
      readerClient();
    }
  }, [token]);

  const loginClient = async (data: IClient): Promise<void> => {
    try {
      setIsLoading(true)
      const response = await api.post("/login", data);
      toast.success("Login successful!");
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid login");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const registerClient = async (data: IClient): Promise<void> => {
    try {
      const response = await api.post("/clients", data);
      toast.success("Registration successfully Complete!");
      setClient(response.data.client);
      navigate("/");
    } catch (error) {
      toast.error("Invalid registration");
      console.log(error);
    }
  };
  const deleteClient = async (id: number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("successfully deleted client");
      setTimeout(() => {
        localStorage.clear();
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Error deleting client");
      console.log(error);
    }
  };
  const updateClient = async (data: IUpdateClient) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const requestData: IUpdateClient = {
        ...data,
      };
      if (data.email === clientSelect?.email) {
        delete requestData.email;
      }
      const response = await api.patch(
        `/clients/${clientSelect?.id}`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Profile successfully updated");
      setClient(response.data);
      setClientSelect(null);
      setShowModalClient(false);
    } catch (error) {
      console.log(error);
    }
  };
  const contextValue: IClientContext = {
    client,
    contacts,
    logout,
    setClient,
    setContacts,
    loginClient,
    registerClient,
    isLoading,
    deleteClient,
    updateClient,
    modalClientOpen,
    clientSelect,
    showModalClient,
    setShowModalClient,
  };
  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  );
};
