import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

import { AuthProvider } from "react-oidc-context";

//the hostname
const currentUrl = window.location.origin;

const onSigninCallback = (): void => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

const oidcConfig = {
  authority: "https://your-identity-server.com",
  client_id: "your-client-id",
  redirect_uri: `${currentUrl}/app/callback`,
  onSigninCallback: onSigninCallback,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
