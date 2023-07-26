import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Topnav() {
  const [toggle, setToggle] = useState(false);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "categories",
      label: "Categories",
      path: "/",
    },
    {
      id: "events",
      label: "Events",
      path: "/",
    },
    {
      id: "news",
      label: "News",
      path: "/",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="shadow w-full h-20 flex justify-center">
        <nav className="container flex justify-between items-center p-10">
          <div className="">
            <a href="">
              <img
                className="w-14 rounded-full"
                src="./assets/img/logo.jpeg"
                alt=""
              />
            </a>
          </div>
          <div
            className={`${
              toggle ? "top-[9%]" : "top-[-100%]"
            } md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-10 gap-8">
              {menuItem.map((item) => (
                <li key={item.id}>
                  <a
                    className="hover:bg-secondary-100 px-4 py-2 rounded-md transition-all text-md font-semibold text-primary"
                    href={item.path}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-5 py-2 rounded-lg border-2">Sign In</button>
            <div className="md:hidden">
              {toggle ? (
                <CloseIcon
                  fontSize="large"
                  className="cursor-pointer transition-all"
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              ) : (
                <MenuIcon
                  fontSize="large"
                  className="cursor-pointer transition-all"
                  onClick={() => {
                    setToggle(true);
                  }}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Topnav;
