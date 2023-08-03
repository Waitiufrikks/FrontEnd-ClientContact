import { createContext, useEffect, useState } from "react";
import api from "../../service/api";
import { IClient, IClientContext, IClientProviderProps } from "./@types";
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
  const logout = (): void => {
    localStorage.removeItem("@TOKEN");

    setClient(null);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  });

  if (token) {
    const readerClient = async () => {
      try {
        const response = await api.get(`clients/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClient(response.data);
        setContacts(response.data.contacts);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };
    readerClient();
  }

  const loginClient = async (data: IClient): Promise<void> => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login successful!");
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid login");
      console.log(error);
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
  const contextValue: IClientContext = {
    client,
    contacts,
    logout,
    setClient,
    setContacts,
    loginClient,
    registerClient,
    isLoading
  };
  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  );
};
