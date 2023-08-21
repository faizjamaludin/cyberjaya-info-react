import React, { useState } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { PrimaryButton } from "../../components/Button";
import StarIcon from "@mui/icons-material/Star";

function ListingPage() {
  return (
    <div className="w-full justify-center items-center min-h-screen flex flex-col">
      <Topnav />
      <div className="container flex flex-1 items-center flex-col">
        <div className="w-full md:py-10 md:px-0 p-10">
          <h1 className="font-semibold text-2xl text-primary">Homemade</h1>
          <div className="grid grid-cols-7 gap-10 mt-10">
            <a
              href="/categories/homemade/item"
              className="md:w-48 md:h-60 w-44 h-48 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px"
            >
              <img
                className="md:w-48 md:h-36 w-40 h-28 object-contain"
                src="/assets/img/Taco_Bell.png"
                alt=""
              />
              <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="md:text-lg text-md font-semibold text-primary">
                    Tacod bell
                  </h1>
                  <p className="font-semibold text-primary text-sm">
                    <span className="text-secondary-200">
                      <StarIcon fontSize="small" />
                    </span>
                    4.6/5
                  </p>
                </div>
                <p className="block text-primary font-medium md:text-base text-sm pt-px">
                  Cyberjaya
                </p>
                <p className="block md:text-sm text-xs">Homemade</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListingPage;
