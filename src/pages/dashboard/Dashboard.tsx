import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openclose } from "../../redux/resize/resizeSlice";
import { RootState } from "../../redux/store";

import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function Dashboard() {
  const selectIsOpen = (state: RootState) => state.resize.isOpen;
  const isOpen = useSelector(selectIsOpen);

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div className={`w-full duration-300 ${isOpen ? "ml-60" : "ml-20"}`}>
        <section className="min-h-screen py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">Dashboard</h1>
          <div className="flex flex-row gap-20 justify-center items-center mt-20 text-primary">
            <div className="flex flex-col w-72 h-36 border-2 border-primary rounded-lg shadow-lg p-5">
              <p className="font-medium text-md">Registered User</p>
              <p className="text-5xl font-semibold text-center h-full place-items-center place-content-center flex text-primary">
                27
              </p>
            </div>

            <div className="flex flex-col w-72 h-36 border-2 border-primary rounded-lg shadow-lg p-5">
              <p className="font-medium text-md">Listing</p>
              <p className="text-5xl font-semibold text-center h-full place-items-center place-content-center flex text-primary">
                27
              </p>
            </div>

            <div className="flex flex-col w-72 h-36 border-2 border-primary rounded-lg shadow-lg p-5">
              <p className="font-medium text-md">Registered User</p>
              <p className="text-5xl font-semibold text-center h-full place-items-center place-content-center flex text-primary">
                27
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
