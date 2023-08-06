import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ClientContext } from "../ClientContext";
import api from "../../service/api";
import { IContact, IContactContext, IContactProviderProps } from "./@types";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const { contacts, setContacts } = useContext(ClientContext);
  const [contactSelect, setContactSelect] = useState<IContact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);

  const modalOpen = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const modalContactOpen = (contact: IContact | null) => {
    if (contact) {
      console.log(`Abrindo modal do ${contact.full_name}`);
      setContactSelect(contact);
    } else {
      console.log("fechando modal");
      setContactSelect(null);
    }
    setShowModalContact((prevShowModal) => !prevShowModal);
  };

  const deleteContact = async (id: number | undefined) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newContactList = contacts?.filter((contact) => contact.id !== id);
      if (newContactList) {
        setContacts(newContactList);
      }
      setShowModalContact(false);
    } catch (error) {
      console.log(error);
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
      }
      setShowModal(false);
      toast.success(`Contato criado com sucesso`);
    } catch (error) {
      console.log(error);
    }
  };

  const contactUpdate = async (data: IContact) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      console.log(contactSelect);
      const response = await api.patch(`/contacts/${contactSelect?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedContactList = contacts?.map((contact) => {
        if (contact.id == response.data.id) {
          return { ...contact, ...data };
        } else {
          return contact;
        }
      });

      setContacts(updatedContactList!);

      setContactSelect(null);
      setShowModalContact(false);
      toast.success(`Contato atualizado com sucesso`);
    } catch (error) {
      console.log(error);
      toast.error(`Erro ao atualizar o contato`);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        showModal,
        modalOpen,
        createContactClient,
        setShowModal,
        setContactSelect,
        contactSelect,
        setShowModalContact,
        modalContactOpen,
        showModalContact,
        deleteContact,
        contactUpdate,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
