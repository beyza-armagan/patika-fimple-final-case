import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <ChakraProvider>
    <AuthProvider> 
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </ChakraProvider>
);
