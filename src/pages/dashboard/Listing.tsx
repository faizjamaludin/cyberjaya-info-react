import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";

import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

function Listing() {
  const selectIsOpen = (state: RootState) => state.resize;
  const { isOpen } = useSelector(selectIsOpen);
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div
        className={`w-full duration-300 ${isOpen === true ? "ml-20" : "ml-60"}`}
      >
        <section className="min-h-screen w-11/12 py-5 px-10 text-primary">
          <div className="flex justify-between items-center mt-10">
            <h1 className="font-medium text-2xl">Listing</h1>
            <PrimaryButton
              label=" Add Listing"
              icon={<AddIcon />}
              style="flex items-center"
              onClick={() => {
                navigate("/dashboard/listing/addlisting");
              }}
            />
          </div>
          <div className="mt-10">{/* <NewsData /> */}</div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Listing;
