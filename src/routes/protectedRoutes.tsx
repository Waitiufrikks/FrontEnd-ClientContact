import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { ClientContext } from "../provides/ClientContext";

export const ProtectedRoutes = () => {
  const { client, isLoading } = useContext(ClientContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]); 

  if (isLoading) {
    return <div>Carregando ...</div>;
  }

  return client ? <Outlet /> : null;
};