import { styled } from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  min-width: 300px;
  max-width: 770px;
  margin: 0 auto;
  gap: 1rem;
  padding: 30px 10px 30px 10px;
  div.intro-config-perfil {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
      height:40px;
      border:none;
      font-size:var(--text-size-small);
      font-weight:600;
      border-radius:var(--radius-default);
      background:var(--color-primary);
      color:var(--color-grey-800);
    }
  }
  div.detail-profile {
    display: flex;
    gap: 2rem;
    span {
      color: var(--color-grey-100);
    }
  }
`;
export default StyledDiv;
