import { createContext, useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClientContext } from "../ClientContext";
import api from "../../service/api";
import { IContact, IContactContext, IContactProviderProps } from "./@types";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const { contacts, setContacts } = useContext(ClientContext);
  const [showModal, setShowModal] = useState(false);

  const modalOpen = () => {
    if (!showModal) {
      console.log("teste")
      setShowModal(true);
    } else if (showModal) {
      setShowModal(false);
    }
  };

  const createContactClient = async (data: IContact) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      const response = await api.post(`/contacts`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (contacts) {
        const newContact = [...contacts, response.data];
        setContacts(newContact);
        setShowModal(false);
      }
      toast.success(`Contato criado com sucesso`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        showModal,
        modalOpen,
        createContactClient,
        setShowModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
