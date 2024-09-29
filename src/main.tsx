import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import supabase from "./lib/supabase/supabase.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </StrictMode>
);
