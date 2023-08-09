import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";

import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function Profile() {
  const selectIsOpen = (state: RootState) => state.resize;
  const { isOpen } = useSelector(selectIsOpen);

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div
        className={`w-full duration-300 ${isOpen === true ? "ml-20" : "ml-60"}`}
      >
        <section className="min-h-screen py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">Profile</h1>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
