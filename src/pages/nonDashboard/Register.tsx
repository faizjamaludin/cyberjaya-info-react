import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import { PrimaryButton } from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import { RootState } from "../../features/store";
import { PacmanLoader } from "react-spinners";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const selectAuth = (state: RootState) => state.auth;
  const { user, isLoading, isSuccess } = useSelector(selectAuth);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/login");
    }

    if (token) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isSuccess, navigate, dispatch, token]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(register(values));
    },
  });

  return (
    <div className="w-full justify-center items-center min-h-screen flex flex-col">
      <Topnav />
      <section className="flex flex-1 justify-center items-center w-full  my-16">
        <form
          onSubmit={formik.handleSubmit}
          className="w-96  border-2 border-primary rounded-md shadow-md p-4"
        >
          <h1 className="text-primary text-center mt-5 font-semibold text-3xl text-primary">
            Register
          </h1>
          <div className="mb-3">
            <label className="block text-sm text-primary font-semibold">
              Full Name
            </label>
            <input
              className="w-full outline-0 border-2 border-primary py-2 px-2 rounded-md text-sm"
              type="text"
              placeholder="John Doe"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm text-primary font-semibold">
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
          <div className="mb-3">
            <label className="block text-sm text-primary font-semibold">
              Password
            </label>
            <input
              className="w-full outline-0 border-2 border-primary py-2 px-2 rounded-md text-sm"
              type="password"
              placeholder="johndoe@gmail.com"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm text-primary font-semibold">
              Confirm Password
            </label>
            <input
              className="w-full outline-0 border-2 border-primary py-2 px-2 rounded-md text-sm"
              type="password"
              name="cpassword"
              placeholder="johndoe@gmail.com"
              value={formik.values.cpassword}
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
            Have an account?{" "}
            <a className="font-semibold hover:text-secondary-200" href="/login">
              Login
            </a>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Register;
