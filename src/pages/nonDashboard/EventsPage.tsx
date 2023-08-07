import React from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../../features/store";

function EventsPage() {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <Topnav />
      <div className="container flex justify-center items-center flex-col">
        <div className="w-full md:py-10 md:px-0 p-10">
          <div className="border h-64 flex justify-center items-center">
            Item Image
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex justify-between flex-col md:flex-row">
              <div className="">
                <h1 className="font-semibold text-4xl text-primary mt-1">
                  Lorong Belakang
                </h1>
                <div className="mt-10 md:w-9/12 w-full">
                  <p className="text-primary">
                    To check if the form data is valid using validators, you can
                    utilize the FormGroup's valid property. Here's an example of
                    how you can check if the form is valid:
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:w-96 w-full ">
                <div className="">
                  <div className="bg-secondary-100 mt-10 md:mt-0">
                    <h1 className="text-primary font-semibold px-2 py-3 border-b-primary border-b-2">
                      Event Details
                    </h1>
                  </div>
                  <div className="py-4 flex flex-col gap-4">
                    <p className="text-sm text-primary font-semibold">Date :</p>
                    <p className="text-sm text-primary font-semibold">Time :</p>
                  </div>
                </div>
                <div className="bg-secondary-100">
                  <h1 className="text-primary font-semibold px-2 py-3 border-b-primary border-b-2">
                    Location & Contact
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventsPage;
