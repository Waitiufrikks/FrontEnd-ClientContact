import { createContext, useEffect, useState } from "react";
import api from "../../service/api";
import {
  IClient,
  IClientContext,
  IClientProviderProps,
  IContact,
} from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [loading, setLoading] = useState(false);

  const [contacts, setContacts] = useState<IContact[]>([]);
  const navigate = useNavigate();

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
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

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
        } catch (error) {
          console.log(error);
        }
      };
      readerClient();
    }
  }, []);

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
    } finally {
      setLoading(false);
    }
  };

  const registerClient = async (data: IClient): Promise<void> => {
    try {
      const response = await api.post("/clients", data);
      toast.success("Registration successfully Complete!");
      setClient(response.data.client);
      navigate("/login");
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
  };
  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  );
};
