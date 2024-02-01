import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `Movie-Magic-Tickets/home`;
    } else {
      document.title = `Movie-Magic-Tickets ${location.pathname}`;
    }
    if (location.state) {
      document.title = `${location.state}`;
    }
  });

  return (
    <div className="font-inter">
      <Outlet>
      </Outlet>
    </div>
  );
};

export default Layout;
