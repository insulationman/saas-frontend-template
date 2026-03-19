import { useEffect } from "react";
import { useNavigate } from "react-router";

function CallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the app after callback processing
    navigate("/app/details/1", { replace: true });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>Processing authentication...</div>
    </div>
  );
}

export default CallbackHandler;
