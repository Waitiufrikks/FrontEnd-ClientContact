import StyledNav from "./style";

interface NavProps {
  logout: () => void;
}

const Nav: React.FC<NavProps> = ({ logout }) => {
  return (
    <StyledNav>
      <h1>Clients-Contacts</h1>
      <button onClick={logout}>Sair</button>
    </StyledNav>
  );
};

export default Nav;