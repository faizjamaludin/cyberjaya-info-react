import React, { useState, useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import { PrimaryButton } from "../../components/Button";
import { RootState } from "../../redux/store";
import { login, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const selectAuth = (state: RootState) => state.auth;
  const { user, isLoading, isError, isSuccess, message } =
    useSelector(selectAuth);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isSuccess || token) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <div className="w-full">
      <Topnav />
      <section className="flex justify-center items-center w-full my-40">
        <form
          onSubmit={formik.handleSubmit}
          className="w-96  border-2 border-primary rounded-md shadow-md p-4"
        >
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
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="block text-md text-primary font-semibold">
              Password
            </label>
            <input
              className="w-full outline-0 border-2 border-primary py-2 px-2 rounded-md text-sm"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="w-full">
            {isLoading ? (
              <PrimaryButton
                style="mt-4 w-full flex justify-center items-center"
                type="submit"
                icon={<PacmanLoader color="#FFFFFF" size={9} />}
              />
            ) : (
              <PrimaryButton style="w-full mt-2" type="submit" label="Submit" />
            )}
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
