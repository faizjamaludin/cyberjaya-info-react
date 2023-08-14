import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { getAllEvent } from "../../features/event/eventSlice";

function EventsPage() {
  const dispatch = useDispatch<any>();
  const selectEvent = (state: RootState) => state.event;
  const { eventItem }: any = useSelector(selectEvent);

  useEffect(() => {
    dispatch(getAllEvent());
  }, [dispatch]);

  return (
    <div className="w-full justify-center items-center flex flex-col">
      <Topnav />
      <div className="container flex justify-center items-center flex-col">
        <div className="w-full md:py-10 md:px-0 p-10">
          <h1 className="font-semibold text-2xl text-primary">Events</h1>
          <div className="grid grid-cols-7 grid-rows-10 gap-10 mt-10">
            {!eventItem ? (
              <p>Loading...</p>
            ) : (
              <>
                {eventItem.map((item: any) => (
                  <a
                    key={item._id}
                    href={`/event/${item._id}`}
                    className="md:w-48 md:h-60 w-44 h-48 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px"
                  >
                    <img
                      className="md:w-48 md:h-36 w-40 h-28 object-contain"
                      src="/assets/img/lorong_belakang.jpeg"
                      alt=""
                    />
                    <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                      <div className="flex flex-row justify-between items-center">
                        <h1 className="md:text-lg text-md font-semibold text-primary">
                          {item.eventTitle.length > 15
                            ? item.eventTitle.subString(0, 15).trimEnd("...")
                            : item.eventTitle}
                        </h1>
                      </div>
                      <p className="block text-primary font-medium md:text-base text-sm pt-px">
                        Cyberjaya
                      </p>
                      <p className="block md:text-sm text-xs">
                        {item.eventLocation}
                      </p>
                    </div>
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventsPage;
