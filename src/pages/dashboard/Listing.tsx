import React, { useState } from "react";

import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function Listing() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav open={open} setOpen={setOpen} />
      </div>
      <div className={`w-full duration-300 ${open ? "ml-60" : "ml-20"}`}>
        <section className="min-h-screen py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">Listing</h1>
          <form className="mt-14" action="">
            {/* Basic Information Section */}
            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10">
              <h1 className="font-semibold text-xl mb-5">
                Basic <span className="text-secondary-200">Information</span>
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-4 w-full">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Type Listing
                  </label>
                  <select
                    className="w-full border-2 border-primary text-sm p-2 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="">Restaurant</option>
                    <option value="">Homemade</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Listing Category
                  </label>
                  <select
                    className="w-full border-2 border-primary text-sm p-2 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="">Food</option>
                    <option value="">Beverage</option>
                    <option value="">Food & Beverage</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Listing Name
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2"
                    type="text"
                    name=""
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            {/* Address section */}
            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10 mt-12">
              <h1 className="font-semibold text-xl mb-5">Address</h1>
              <div className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-4 w-full">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Address 1
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2"
                    type="text"
                    name=""
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Address 2
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2"
                    type="text"
                    name=""
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Zip / Postal Code
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2"
                    type="text"
                    name=""
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Area
                  </label>
                  <select
                    className="w-full border-2 border-primary text-sm p-2 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="">Laman View</option>
                    <option value="">Masreca</option>
                    <option value="">Third Avenue</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Listing;

// Basic Information
// - Type Listing
//   - Restaurant
//   - Homemade

// - Listing Category
//  - Food
//  - Beverages
//  - Food & Beverages

// Address
// - address 1
// - address 2
// - Zip/ Postal Code
// - Area

// Gallery

// Details Overview
// - textarea
// - Phone
// - Website
// - Email
// - Facebook
// - Instagram
// - Twitter

// Opening Hours

// Pricing
