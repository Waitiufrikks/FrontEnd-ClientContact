import StyledDivHeaderModal from "./style";

interface IHeaderModal {
  text: string;
  closeModal: () => void;
}
const HeaderModal = ({ text, closeModal }: IHeaderModal) => {
  return (
    <StyledDivHeaderModal className="header-modal">
      <h2>{text}</h2>
      <button className="btn-close" onClick={closeModal}>
        X
      </button>
    </StyledDivHeaderModal>
  );
};
export default HeaderModal;
