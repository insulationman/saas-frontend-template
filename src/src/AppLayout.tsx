import { Outlet } from "react-router";
import Auth from "./Auth";
import logo from "./assets/Cabanossy-Logo.svg";

const AppLayout = () => {
  return (
    <div className="flex  w-dvw h-dvh  ">
      <div className="flex flex-col w-full h-dvh max-h-dvh">
        <div className="flex justify-between bg-white  p-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 cursor-pointer" />
          </div>
          <div className="flex justify-end items-start h-full">
            <Auth />
          </div>
        </div>
        <div className="flex-grow overflow-hidden p-16">
          {/* This is where the main content of the app will go */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
