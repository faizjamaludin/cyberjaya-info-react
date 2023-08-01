import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openclose } from "../redux/resize/resizeSlice";
import { RootState } from "../redux/store";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InventoryIcon from "@mui/icons-material/Inventory";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import BugReportIcon from "@mui/icons-material/BugReport";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { PrimaryButton } from "./Button";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <SpaceDashboardIcon fontSize="small" />,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <AccountBoxIcon fontSize="small" />,
  },
  {
    title: "Listing",
    path: "/dashboard/listing",
    icon: <InventoryIcon fontSize="small" />,
  },
  {
    title: "Events",
    path: "/dashboard/events",
    icon: <EventNoteIcon fontSize="small" />,
  },
  {
    title: "News",
    path: "/dashboard/news",
    icon: <ArticleIcon fontSize="small" />,
  },
  {
    title: "Testing",
    path: "/dashboard/testing",
    icon: <BugReportIcon fontSize="small" />,
  },
];

const Sidenav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectIsOpen = (state: RootState) => state.resize.isOpen;
  const isOpen = useSelector(selectIsOpen);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <nav
      className={`${
        isOpen ? "w-60" : "w-20"
      } min-h-screen bg-white shadow-md relative p-5 pt-8 duration-300`}
    >
      <NavigateBeforeIcon
        className={`${
          !isOpen && "rotate-180"
        } absolute text-white bg-primary -right-2 top-5 p-px rounded-full cursor-pointer shadow`}
        onClick={() => dispatch(openclose())}
        fontSize="small"
      />

      <div className="flex gap-4 items-center">
        <img
          onClick={handleNavigate}
          className={`cursor-pointer duration-500 w-16 rounded-lg ${
            isOpen && "rotate-[360deg]"
          }`}
          src="/assets/img/logo.jpeg"
          alt=""
        />
        <h1
          className={`${
            !isOpen && "scale-0"
          } text-primary origin-left font-medium text-md duration-300`}
        >
          Cyberjaya Info
        </h1>
      </div>
      <ul className="pt-6">
        {menu.map((item, index) => (
          <a
            key={index}
            className={`text-primary text-sm font-medium flex gap-4 items-center cursor-pointer p-2 hover:bg-secondary-100 hover:rounded-md`}
            href={item.path}
          >
            {item.icon}
            <li className="">
              <span
                className={`${!isOpen && "hidden"} origin-left duration-200`}
              >
                {item.title}
              </span>
            </li>
          </a>
        ))}
        <div className="w-full flex justify-center items-center p-2">
          <PrimaryButton
            style={`text-xs absolute bottom-5  flex gap-2 justify-center items-center ${
              isOpen ? "w-4/5" : "w-3/5"
            }`}
            label={`${isOpen ? "Logout" : ""}`}
            icon={<ExitToAppIcon fontSize="small" />}
          />
        </div>
      </ul>
    </nav>
  );
};

export default Sidenav;
