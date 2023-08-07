import React from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import StarIcon from "@mui/icons-material/Star";
import { PrimaryButton } from "../../components/Button";

function ItemListingPage() {
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
                <div>
                  <label className="text-sm text-primary font-medium bg-secondary-100 rounded-full py-1 px-2">
                    Homemade
                  </label>
                </div>
                <h1 className="font-semibold text-2xl text-primary mt-1">
                  Tacod Bell
                </h1>
                <p className="text-sm text-primary">Neo Cyber</p>
                <div className="mt-10 md:w-9/12 w-full">
                  <h1 className="underline decoration-2 text-lg font-medium">
                    Overview
                  </h1>
                  <p className="">
                    To check if the form data is valid using validators, you can
                    utilize the FormGroup's valid property. Here's an example of
                    how you can check if the form is valid:
                  </p>
                </div>
              </div>
              {/* opening hours section */}
              <div className="flex flex-col md:w-96 w-full ">
                <div className="bg-secondary-100 mt-10 md:mt-0">
                  <h1 className="text-primary font-semibold px-2 py-3 border-b-primary border-b-2">
                    Opening Hours
                  </h1>
                </div>
                <div className="bg-secondary-100">
                  <h1 className="text-primary font-semibold px-2 py-3 border-b-primary border-b-2">
                    Location & Contact
                  </h1>
                </div>
              </div>
            </div>
            {/* Features section */}
            <div className="mt-10 md:w-7/12 w-full">
              <h1 className="underline decoration-2 text-lg font-medium">
                Features
              </h1>
              <p className="">
                To check if the form data is valid using validators, you can
                utilize the FormGroup's valid property. Here's an example of how
                you can check if the form is valid:
              </p>
            </div>
            {/* Pricing section */}
            <div className="mt-10 md:w-7/12 w-full">
              <h1 className="underline decoration-2 text-lg font-medium">
                Pricing
              </h1>
              <div className="mt-5">
                <div className="bg-secondary-100">
                  <h1 className="text-primary font-semibold px-2 py-3 border-b-primary border-b-2">
                    Nasi Goreng
                  </h1>
                </div>
                <div className="h-24 w-full px-2 flex justify-between">
                  <div className="flex items-center flex-row">
                    <img
                      className="w-20 h-20 object-contain"
                      src="/assets/img/Taco_Bell.png"
                      alt=""
                    />
                    <div className="ml-2">
                      <p className="text-primary text-lg font-medium">
                        Nasi Goreng Kampung 1
                      </p>
                      <p className="text-text-200 text-sm">
                        Various vegetable with shrimp and squid
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-center items-center mr-2">
                    <p className="text-primary font-medium text-lg">RM 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Listing section */}
            <div className="mt-10 md:w-7/12 w-full">
              <h1 className="underline decoration-2 text-lg font-medium">
                Similar Listing
              </h1>
              <div className="grid grid-cols-7 gap-10 mt-10">
                <a
                  href="/categories/homemade/item"
                  className="md:w-40 md:h-44 w-44 h-48 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px"
                >
                  <img
                    className="md:w-36 md:h-24 w-40 h-28 object-contain"
                    src="/assets/img/Taco_Bell.png"
                    alt=""
                  />
                  <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="md:text-md text-md font-semibold text-primary">
                        Tacod bell
                      </h1>
                      <p className="font-semibold text-primary text-sm">
                        <span className="text-secondary-200">
                          <StarIcon fontSize="small" />
                        </span>
                        4.6/5
                      </p>
                    </div>
                    <p className="block text-primary font-medium md:text-sm text-sm pt-px">
                      Cyberjaya
                    </p>
                    <p className="block text-xs">Homemade</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Review section */}
            <div className="mt-10 md:w-7/12 w-full">
              <h1 className="underline decoration-2 text-lg font-medium">
                Review (4)
              </h1>
              <div className="mt-10 border-2 border-primary rounded-md p-10 flex md:flex-row flex-col justify-center items-center">
                <div className="w-full flex justify-center items-center flex-col">
                  <h1 className="text-5xl text-primary text-center font-bold">
                    3.2
                  </h1>
                  <p className="text-primary text-md text-center font-medium">
                    out of 5.0
                  </p>
                  <div>
                    <StarIcon fontSize="small" className="text-secondary-200" />
                    <StarIcon fontSize="small" className="text-secondary-200" />
                    <StarIcon fontSize="small" className="text-secondary-200" />
                    <StarIcon fontSize="small" className="text-secondary-200" />
                    <StarIcon fontSize="small" className="text-secondary-200" />
                  </div>
                  {/* star icon */}
                </div>
                <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-10 w-full">
                  <div>
                    <div>
                      <p className="font-semibold text-sm">
                        Service <span>(3.0)</span>
                      </p>
                    </div>
                    <div className="w-full bg-text-300 rounded-full h-2.5 dark:bg-secondary-200">
                      <div className="bg-secondary-200 h-2.5 rounded-full w-6/12"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold text-sm">
                        Service <span>(3.0)</span>
                      </p>
                    </div>
                    <div className="w-full bg-text-300 rounded-full h-2.5 dark:bg-secondary-200">
                      <div className="bg-secondary-200 h-2.5 rounded-full w-6/12"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold text-sm">
                        Service <span>(3.0)</span>
                      </p>
                    </div>
                    <div className="w-full bg-text-300 rounded-full h-2.5 dark:bg-secondary-200">
                      <div className="bg-secondary-200 h-2.5 rounded-full w-6/12"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold text-sm">
                        Service <span>(3.0)</span>
                      </p>
                    </div>
                    <div className="w-full bg-text-300 rounded-full h-2.5 dark:bg-secondary-200">
                      <div className="bg-secondary-200 h-2.5 rounded-full w-6/12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* comments section */}
            <div className="mt-10 md:w-7/12 w-full">
              <h1 className="underline decoration-2 text-lg font-medium">
                Comments
              </h1>
              <div className="mt-10 border-2 border-primary bg-secondary-100 rounded-md p-10 flex flex-col">
                <h1 className="text-primary font-semibold">Add Review</h1>
                <div className="grid grid-col-4 grid-flow-col mt-10">
                  <div className="flex justify-center items-center flex-col">
                    <h1>Service</h1>
                    <div>
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <h1>Value for Money</h1>
                    <div>
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <h1>Location</h1>
                    <div>
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <h1>Cleanliness</h1>
                    <div>
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                      <StarIcon
                        fontSize="small"
                        className="text-secondary-200"
                      />
                    </div>
                  </div>
                </div>
                <hr className="m-10" />
                <form className="w-full">
                  <textarea
                    className="w-full"
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                  ></textarea>
                  <PrimaryButton label="Submit" type="submit" style="mt-5" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemListingPage;
