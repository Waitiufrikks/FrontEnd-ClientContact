import { styled } from "styled-components";

const StyledFormUpdatedContact = styled.div`
  padding: 10px;
  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    div.container-buttons{
      display:flex;
      justify-content:space-between;
      button.btn-update{
        height:40px;
        width:160px;
        font-size:var(--text-size-default);
        font-weight:600;
        color:var(--color-grey-800);
        background:var(--color-primary);
        border:none;
        border-radius:var(--radius-default);
      }
      button.btn-delete{
        height:40px;
        width:90px;
        font-size:var(--text-size-default);
        font-weight:600;
        color:var(--color-white);
        background:var(--color-secondary);
        border:none;
        border-radius:var(--radius-default);
      }

    }
  }
`;

export default StyledFormUpdatedContact;
