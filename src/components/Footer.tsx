import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const menuItem = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "homemade",
      label: "Homemade",
      path: "/",
    },
    {
      id: "restaurant",
      label: "Restaurant",
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
    {
      id: "profile",
      label: "Profile",
      path: "/",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center p-5 shadow-[0_-2px_3px_0_rgba(0,0,0,0.1)]">
      <footer className="container h-44 bottom-0 grid md:grid-cols-3 gap-4">
        {/* 1st grid */}
        <div className="flex md:justify-start justify-center justify-start items-center w-full">
          <a href="/">
            <img
              className="w-20 rounded-full "
              src="./assets/img/logo.jpeg"
              alt=""
            />
          </a>
        </div>

        {/* 2nd grid */}
        <div className="pt-5 md:pt-0">
          <h1 className="text-primary font-semibold text-md mb-5">
            Helpful <span className="text-secondary-200">Links</span>
          </h1>

          <ul className="grid grid-rows-4 grid-flow-col gap-2">
            {menuItem.map((item) => (
              <li key={item.id}>
                <a
                  className="text-primary text-sm font-medium hover:text-secondary-200"
                  href={item.path}
                >
                  <KeyboardArrowRightIcon />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3rd grid */}
        <div className="pt-5 md:pt-0">
          <h1 className="text-primary font-semibold text-md mb-5">
            Contact <span className="text-secondary-200">Us</span>
          </h1>
          <div className="grid grid-flow-row">
            <a
              className="text-primary font-medium text-sm hover:text-secondary-200 flex gap-3 items-center"
              href=""
            >
              <EmailIcon />
              faiz.jamaludin02@gmail.com
            </a>
            <div className="flex gap-10 pt-5">
              <a className="text-primary hover:text-secondary-200" href="/">
                <TwitterIcon fontSize="large" />
              </a>
              <a
                className="text-primary text-sm hover:text-secondary-200"
                href="/"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                className="text-primary text-sm hover:text-secondary-200"
                href="/"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
