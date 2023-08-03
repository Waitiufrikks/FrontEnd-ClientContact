import { useContext } from "react";
import { ContactContext } from "../../../provides/ContactContext";

interface IHeaderModal {
  text: string;
}
const HeaderModal = ({ text }: IHeaderModal) => {
  const { setShowModal } = useContext(ContactContext);
  return (
    <div className="header-modal">
      <h2>{text}</h2>
      <button className="btn-close" onClick={() => setShowModal(false)}>
        X
      </button>
    </div>
  );
};
export default HeaderModal;
