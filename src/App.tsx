import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClientProvider } from "./provides/ClientContext";
import { Router } from "./routes";

function App() {
  return (
    <>
      <ClientProvider>
        <Router />
      </ClientProvider>
      <ToastContainer
      position='top-left'
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
    </>
  );
}

export default App;
