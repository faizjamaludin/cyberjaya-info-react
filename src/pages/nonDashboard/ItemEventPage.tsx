import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { getEvent } from "../../features/event/eventSlice";

function ItemEventPage() {
  const dispatch = useDispatch<any>();
  const selectEvent = (state: RootState) => state.event;
  const { eventTitle, eventDesc, eventLocation, from, to }: any =
    useSelector(selectEvent);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, eventTitle, eventDesc, eventLocation, from, to]);

  return (
    <div className="w-full min-h-screen justify-center items-center flex flex-col">
      <Topnav />
      <div className="container flex flex-1 items-center flex-col">
        <div className="w-full md:py-10 md:px-0 p-10">
          <div className="border h-64 flex justify-center items-center">
            Item Image
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex justify-between flex-col md:flex-row">
              <div className="md:w-7/12 w-full">
                <h1 className="font-semibold text-4xl text-primary mt-1">
                  {eventTitle}
                </h1>
                <div className="mt-10">
                  <p className="text-primary whitespace-pre-wrap">
                    {eventDesc}
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

export default ItemEventPage;
