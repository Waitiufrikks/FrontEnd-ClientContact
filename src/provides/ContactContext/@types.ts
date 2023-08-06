/* eslint-disable @typescript-eslint/ban-types */
export interface IContact {
  id?: number;
  full_name: string;
  email: string;
  phone?: string | null | undefined;
}
export interface IContactProviderProps {
  children: React.ReactNode;
}

export interface IContactContext {
  showModal: boolean;
  modalOpen: () => void;
  createContactClient: (data: IContact) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContactSelect: React.Dispatch<React.SetStateAction<IContact | null>>;
  contactSelect: IContact | null;
  modalContactOpen: (contact: IContact) => void;
  setShowModalContact: React.Dispatch<React.SetStateAction<boolean>>;
  showModalContact: boolean;
  deleteContact: (id: number) => Promise<void>;
  contactUpdate: (updatedContact: IContact) => Promise<void>
}
