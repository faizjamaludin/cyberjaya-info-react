import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openclose } from "../../redux/resize/resizeSlice";
import { RootState } from "../../redux/store";

import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function Testing() {
  const selectIsOpen = (state: RootState) => state.resize.isOpen;
  const isOpen = useSelector(selectIsOpen);
  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div className={`w-full duration-300 ${isOpen ? "ml-60" : "ml-20"}`}>
        <section className="min-h-screen py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">Testing</h1>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Testing;
