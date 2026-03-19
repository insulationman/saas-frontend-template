import { useAuth } from "react-oidc-context";

function Auth() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return (
      <div>
        Oops... {auth.error.source} caused {auth.error.message}
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello {auth.user?.profile.name}{" "}
        <button
          className="p-2 px-4 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-900 ml-2 text-white font-bold"
          onClick={() => void auth.removeUser()}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <button
      className="p-2 px-4 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-900 text-white font-bold"
      onClick={() => void auth.signinRedirect()}
    >
      Log in
    </button>
  );
}

export default Auth;
