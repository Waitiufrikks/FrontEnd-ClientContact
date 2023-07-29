import { ClientProvider } from "./provides/ClientContext";
import { Router } from "./routes";

function App() {
  return (
    <>
      <ClientProvider>
        <Router />
      </ClientProvider>
    </>
  );
}

export default App;
