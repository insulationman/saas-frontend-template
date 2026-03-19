import { useAuth } from "react-oidc-context";
import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import CallbackHandler from "./CallbackHandler";
import DetailsPage from "./DetailsPage";
import SignedOutPage from "./SignedOutPage";
import { client } from "./client/client.gen";

function App() {
  const auth = useAuth();
  client.setConfig({
    auth: async () => {
      if (auth.isAuthenticated) {
        const token = await auth.user?.access_token;
        return token ? `Bearer ${token}` : undefined;
      }

      // If the user is not authenticated, trigger the sign-in process
      auth.signinRedirect();
      return undefined;
    },
  });

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="app">
            <Route path="callback" element={<CallbackHandler />} />
            <Route path="details/:code" element={<DetailsPage />} />
          </Route>
          <Route path="/" element={<DetailsPage />} />
        </Route>
      </Routes>
    );
  }

  return <SignedOutPage />;
}

export default App;
