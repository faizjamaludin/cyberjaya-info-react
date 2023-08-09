import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { PrimaryButton } from "./Button";
import { topNavMenu, userOption } from "./menu/menuList";

import { useNavigate } from "react-router-dom";

import { RootState } from "../features/store";
import { useSelector, useDispatch } from "react-redux";
import { isAuth, logout } from "../features/auth/authSlice";

function Topnav() {
  const [toggle, setToggle] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch<any>();
  const selectAuth = (state: RootState) => state.auth;
  const { token, isAuthenticated } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(isAuth());
  }, [token, isAuthenticated, dispatch]);

  const btnHandler = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    setSubmenuOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="shadow w-full h-20 flex justify-center">
        <nav className="container flex justify-between items-center p-10">
          <div className="">
            <a href="/">
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
              {topNavMenu.map((item) => (
                <li key={item.id}>
                  <a
                    className="hover:bg-secondary-100 px-4 py-2 rounded-md transition-all text-md font-medium text-primary"
                    href={item.path}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center  gap-6 relative">
            {!isAuthenticated ? (
              <PrimaryButton
                type="button"
                onClick={btnHandler}
                label="Sign In"
              />
            ) : (
              <img
                className="w-14 cursor-pointer rounded-full"
                src="./assets/img/user.png"
                alt=""
                onClick={() => {
                  setSubmenuOpen(!submenuOpen);
                }}
              />
            )}
            {submenuOpen ? (
              <ul className="absolute left-0 top-16 w-40 bg-white border-2 rounded-md border-primary shadow-md">
                {userOption.map((submenuItem) => (
                  <li key={submenuItem.id}>
                    {submenuItem.label === "Logout" ? (
                      <a
                        className="block px-4 py-2 hover:bg-secondary-100 hover:rounded-md text-sm font-medium"
                        href="#"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    ) : (
                      <a
                        className="block px-4 py-2 hover:bg-secondary-100 hover:rounded-md text-sm font-medium"
                        href={submenuItem.path}
                      >
                        {submenuItem.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Topnav;
