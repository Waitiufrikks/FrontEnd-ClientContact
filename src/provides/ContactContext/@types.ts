export interface IContact {
  id?: number;
  full_name: string;
  email: string;
  phone?: number | null | undefined;
}
export interface IContactProviderProps {
  children: React.ReactNode;
}

export interface IContactContext {
  showModal: boolean;
  modalOpen: () => void;
  createContactClient: (data: IContact) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
