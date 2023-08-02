import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openclose } from "../../redux/resize/resizeSlice";
import { RootState } from "../../redux/store";

import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function News() {
  const selectIsOpen = (state: RootState) => state.resize.isOpen;
  const isOpen = useSelector(selectIsOpen);

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div className={`w-full duration-300 ${isOpen ? "ml-60" : "ml-20"}`}>
        <section className="min-h-screen py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">News</h1>
          <form className="mt-14">
            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10">
              <h1 className="font-semibold text-xl mb-5">
                News <span className="text-secondary-200">Information</span>
              </h1>
              <div className="flex flex-col gap-4 w-full">
                <div className="">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    News Title
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                    type="text"
                    name=""
                    placeholder=""
                  />
                </div>

                <div className="">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    News Image
                  </label>
                </div>

                <div className="">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    News Item
                  </label>
                  <textarea className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200" name="" id="" cols={30} rows={10}></textarea>
                </div>
              </div>
            </div>
            <PrimaryButton style="mt-5" type="submit" label="Submit" />
          </form>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default News;
