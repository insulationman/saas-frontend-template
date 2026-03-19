import { useRef } from "react";
import Auth from "./Auth";
import logo from "./assets/Cabanossy-Logo.svg";

const SignedOutPage = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const handleLogoClick = () => {
    if (logoRef.current) {
      logoRef.current.style.transition = "transform 0.5s ease-in-out";
      logoRef.current.style.transform = "rotate(360deg)";
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.transition = "";
          logoRef.current.style.transform = "";
        }
      }, 500);
    }
  };
  return (
    <div className="w-[100dvw] h-[100dvh] flex max-w-[100dvw] max-h-[100dvh] bg-white">
      <div className="flex justify-center flex-col items-center grow w-full h-full bg-white">
        <div className="flex flex-col h-full w-full bg-neutral-500">
          <div className="grid grid-cols-3 bg-white   p-6">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-12 cursor-pointer"
                ref={logoRef}
                onClick={handleLogoClick}
              />
            </div>
            <div className=" z-50 gap-2 flex flex-col justify-center items-center h-full"></div>
            <div className="flex justify-end items-start h-full">
              <Auth />
            </div>
          </div>
          <div className="pb-20 flex flex-col justify-center items-center h-full px-6">
            <img
              src={logo}
              alt="Logo"
              className="w-40 cursor-pointer"
              ref={logoRef}
              onClick={handleLogoClick}
            />
            <h1 className="text-xl font-bold mt-6 text-white">
              You are signed out. Please log in to access the app.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedOutPage;
