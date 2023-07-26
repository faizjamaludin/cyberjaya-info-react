import React, { useState } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import { PrimaryButton } from "../../components/Button";

function Login() {
  return (
    <div className="w-full">
      <Topnav />
      <section className="flex justify-center items-center w-full my-16">
        <form className="w-96  border-2 border-primary rounded-md shadow-md p-4">
          <h1 className="text-primary text-center mt-5 font-semibold text-3xl text-primary">
            Login
          </h1>
          <div>
            <label className="block text-md text-primary font-semibold">
              Email
            </label>
            <input
              className="w-full outline-0 border-2 border-primary py-2 px-2 rounded-md text-sm"
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div>
            <label className="block text-md text-primary font-semibold">
              Password
            </label>
            <input
              className="w-full outline-0 border-2 border-primary py-2 px-2 rounded-md text-sm"
              type="password"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="w-full">
            <PrimaryButton style="w-full mt-2" type="submit" label="Submit" />
          </div>
          <p className="text-center text-primary mt-2 mb-2">or</p>
          <p className="text-sm font-normal text-primary">
            Don't have an account?{" "}
            <a
              className="font-semibold hover:text-secondary-200"
              href="/register"
            >
              Register
            </a>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
