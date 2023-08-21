import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { addEvent } from "../../features/event/eventSlice";

import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";

function AddEvent() {
  const selectIsOpen = (state: RootState) => state.resize;
  const { isOpen } = useSelector(selectIsOpen);

  const dispatch = useDispatch<any>();

  const initialValues = {
    eventTitle: "",
    eventDesc: "",
    from: "",
    to: "",
    eventLocation: "",
  };

  useEffect(() => {}, [dispatch]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(addEvent(values));
    },
  });

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div
        className={`w-full duration-300 ${isOpen === true ? "ml-20" : "ml-60"}`}
      >
        <section className="min-h-screen py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">Events</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-14 md:w-3/5 w-full flex flex-col gap-5"
          >
            <div className="border-2 border-primary shadow-lg rounded-md text-primary p-10">
              <h1 className="font-semibold text-xl mb-5">
                Event <span className="text-secondary-200">Information</span>
              </h1>
              <div className="flex flex-col gap-4 w-full">
                <div className="">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Event Title
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                    type="text"
                    name="eventTitle"
                    value={formik.values.eventTitle}
                    onChange={formik.handleChange}
                    placeholder="Lorong Belakang"
                  />
                </div>

                <div className="">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Event Image
                  </label>
                </div>
              </div>
            </div>

            <div className="border-2 border-primary shadow-lg rounded-md text-primary p-10">
              <h1 className="font-semibold text-xl mb-5">
                Event <span className="text-secondary-200">Details</span>
              </h1>

              <div className="">
                <label className="block text-sm font-semibold mb-2" htmlFor="">
                  Event Description
                </label>
                <textarea
                  className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                  name="eventDesc"
                  value={formik.values.eventDesc}
                  onChange={formik.handleChange}
                  cols={30}
                  rows={10}
                ></textarea>
              </div>

              <div className="flex flex-col mt-2">
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      From
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                      type="date"
                      name="from"
                      value={formik.values.from}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold mb-2">
                      To
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                      type="date"
                      name="to"
                      value={formik.values.to}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="w-full mt-2">
                  <label className="block text-sm font-semibold mb-2">
                    Location
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                    type="text"
                    name="eventLocation"
                    value={formik.values.eventLocation}
                    onChange={formik.handleChange}
                    placeholder="Tamarind Square"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center mt-2">
              <PrimaryButton type="submit" label="Submit" />
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default AddEvent;
