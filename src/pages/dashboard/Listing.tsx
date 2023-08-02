import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function Listing() {
  const selectIsOpen = (state: RootState) => state.resize.isOpen;
  const isOpen = useSelector(selectIsOpen);

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div className={`w-full duration-300 ${isOpen ? "ml-60" : "ml-20"}`}>
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

            {/* Gallery section */}
            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10 mt-12">
              <h1 className="font-semibold text-xl mb-5">Gallery</h1>
            </div>

            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10 mt-12">
              <h1 className="font-semibold text-xl mb-5">Details Overview</h1>
              <div className="flex flex-col ">
                <div className="w-full">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Description
                  </label>
                  <textarea
                    className="border-2 border-primary w-full text-sm rounded-md p-2"
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col flex-wrap">
                <div className="flex flex-row w-full gap-4">
                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Phone
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="phone"
                      placeholder="0134567890"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Website
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="website"
                      placeholder="www.your-website.com"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Email
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="email"
                      placeholder="your-email@gmail.com"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-full gap-4 mt-2">
                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Facebook
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="facebook"
                      placeholder="www.facebook.com/your-facebook"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Instagram
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="instagram"
                      placeholder="www.instagram.com/your-instagram"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Twitter
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="twitter"
                      placeholder="www.twitter.com/your-twitter"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10 mt-12">
              <h1 className="font-semibold text-xl mb-5">Opening Hours</h1>
              <div className="flex flex-col "></div>
            </div>


            {/* Pricing section */}
            <div className="w-3/5 border-2 border-primary shadow-lg rounded-md text-primary p-10 mt-12">
              <h1 className="font-semibold text-xl mb-5">Pricing</h1>
              <div className="flex flex-col ">
                <div className="w-full">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor=""
                  >
                    Category Item
                  </label>
                  <input
                    className="border-2 border-primary w-full text-sm rounded-md p-2"
                    type="text"
                    name="itemCategory"
                    placeholder="Burger"
                  />
                </div>
                <div className="flex flex-row w-full gap-4 mt-2">
                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Item Name
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="itemName"
                      placeholder="Beef Burger"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Item Description
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="itemDesc"
                      placeholder="Homemade patty serve with vegetable and mayo"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor=""
                    >
                      Item Price (RM)
                    </label>
                    <input
                      className="border-2 border-primary w-full text-sm rounded-md p-2"
                      type="text"
                      name="itemPrice"
                      placeholder="20.00"
                    />
                  </div>
                </div>
              </div>
            </div>
            <PrimaryButton type="submit" style="mt-5" label="Submit" />
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
