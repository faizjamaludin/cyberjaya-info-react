import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSideNav } from "../features/resize/resizeSlice";
import { RootState } from "../features/store";
import { sideNavMenu } from "./list/menuList";
import { isAuth } from "../features/auth/authSlice";

import { PrimaryButton } from "./Button";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidenav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const selectIsOpen = (state: RootState) => state.resize;
  const selectIsAuthenticated = (state: RootState) => state.auth;
  const { isOpen } = useSelector(selectIsOpen);
  const { isAuthenticated, token } = useSelector(selectIsAuthenticated);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    dispatch(isAuth());
  }, [isOpen, isAuthenticated, dispatch]);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleOpen = () => {
    dispatch(openCloseSideNav());
  };

  return (
    <nav
      className={`${
        isOpen ? "w-20" : "w-60"
      } min-h-screen bg-white shadow-md relative p-5 pt-8 duration-500`}
    >
      <NavigateBeforeIcon
        className={`${
          isOpen === true && "rotate-180"
        } absolute text-white bg-primary -right-2 top-5 p-px rounded-full cursor-pointer shadow `}
        onClick={handleOpen}
        fontSize="small"
      />

      <div className="flex gap-4 items-center">
        <img
          onClick={handleNavigate}
          className={`cursor-pointer duration-500 w-16 rounded-lg ${
            isOpen && "rotate-[360deg]"
          } `}
          src="/assets/img/logo.jpeg"
          alt=""
        />
        <h1
          className={`${
            isOpen === true && "scale-0"
          } text-primary origin-left font-medium text-md duration-300`}
        >
          Cyberjaya Info
        </h1>
      </div>
      <ul className="pt-6">
        {sideNavMenu.map((item, index) => (
          <a
            key={index}
            className={`text-primary text-sm font-medium flex gap-4 mt-2 items-center cursor-pointer p-2 hover:bg-secondary-100 hover:rounded-md ${
              currentPath === item.path ? "bg-secondary-100 rounded-md" : ""
            }`}
            href={item.path}
          >
            {item.icon}
            <li className="">
              <span
                className={`${
                  isOpen === true && "hidden"
                } origin-left duration-200`}
              >
                {item.title}
              </span>
            </li>
          </a>
        ))}
        <div className="w-full flex justify-center items-center p-2">
          <PrimaryButton
            style={`text-xs absolute bottom-5  flex gap-2 justify-center items-center ${
              isOpen === true ? "w-4/5" : "w-3/5"
            }`}
            label={`${isOpen === true ? "" : "Logout"}`}
            icon={<ExitToAppIcon fontSize="small" />}
          />
        </div>
      </ul>
    </nav>
  );
};

export default Sidenav;
