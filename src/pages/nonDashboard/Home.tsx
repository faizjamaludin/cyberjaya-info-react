import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import { PrimaryButton } from "../../components/Button";
import StarIcon from "@mui/icons-material/Star";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "../../features/auth/authSlice";

interface SearchProps {
  search: String;
}

function Home() {
  const dispatch = useDispatch<any>();
  const selectAuth = (state: RootState) => state.auth;
  const { user, isLoading, isError, token, isAuthenticated } =
    useSelector(selectAuth);

  useEffect(() => {
    dispatch(isAuth());
  }, [token, isAuthenticated, dispatch]);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted!", values);
    },
  });

  return (
    <div className="w-full justify-center items-center flex flex-col">
      <Topnav />
      <div className="container flex justify-center items-center flex-col">
        <header className="grid grid-rows-3 md:mt-28 place-items-center">
          {/* grid 1 */}
          <div className="hidden justify-between items-center gap-20 md:flex">
            <img className="w-36" src="assets/img/pizza.png" alt="" />
            <img className="w-36" src="assets/img/taco.png" alt="" />
            <img className="w-36" src="assets/img/cake.png" alt="" />
          </div>
          {/* grid 2 */}
          <div className="mt-20">
            <h1 className="font-semibold text-5xl text-primary text-center">
              Find Nearby
              <span className="text-secondary-200">Attractions</span>
            </h1>
          </div>
          {/* grid 3 */}
          <div className="w-full mt-20 flex justify-center items-center">
            <form
              className="w-3/4 flex flex-row border-2 border-primary px-2 py-2 rounded-md"
              onSubmit={formik.handleSubmit}
            >
              <input
                className="w-full outline-0 font-normal text-sm"
                name="search"
                type="text"
                placeholder="What's in your mind?"
                onChange={formik.handleChange}
                value={formik.values.search}
              />
              <PrimaryButton type="submit" label="Search" />
            </form>
          </div>
        </header>

        {/* Recently Added section */}
        <section className="flex flex-col justify-start items-center w-full mt-20">
          <div className="">
            <h1 className="text-primary font-semibold text-lg mb-5">
              Recently <span className="text-secondary-200">Added</span>
            </h1>
            <div className="grid grid-cols-7 gap-10">
              {/* item box */}
              <div className="w-48 h-60 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px">
                <img
                  className="w-48 h-36 object-contain"
                  src="/assets/img/Taco_Bell.png"
                  alt=""
                />
                <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-lg font-semibold text-primary">
                      Tacod bell
                    </h1>
                    <p className="font-semibold text-primary text-sm">
                      <span className="text-secondary-200">
                        <StarIcon fontSize="small" />
                      </span>{" "}
                      4.6/5
                    </p>
                  </div>
                  <p className="block text-primary font-medium text-base pt-px">
                    Cyberjaya
                  </p>
                  <p className="block text-sm">Homemade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Views section */}
        <section className="flex flex-col justify-start items-center w-full mt-20">
          <div className="">
            <h1 className="text-primary font-semibold text-lg mb-5">
              Top <span className="text-secondary-200">Views</span>
            </h1>
            <div className="grid grid-cols-7 gap-10">
              {/* item box */}
              <div className="w-48 h-60 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px">
                <img
                  className="w-48 h-36 object-contain"
                  src="/assets/img/Taco_Bell.png"
                  alt=""
                />
                <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-lg font-semibold text-primary">
                      Tacod bell
                    </h1>
                    <p className="font-semibold text-primary text-sm">
                      <span className="text-secondary-200">
                        <StarIcon fontSize="small" />
                      </span>{" "}
                      4.6/5
                    </p>
                  </div>
                  <p className="block text-primary font-medium text-base pt-px">
                    Cyberjaya
                  </p>
                  <p className="block text-sm">Homemade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events section */}
        <section className="flex flex-col justify-start items-center w-full mt-20">
          <div className="">
            <h1 className="text-primary font-semibold text-lg mb-5">Events</h1>
            <div className="grid grid-cols-7 gap-10">
              {/* item box */}
              <div className="w-48 h-60 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px">
                <img
                  className="w-48 h-36 object-contain"
                  src="/assets/img/Taco_Bell.png"
                  alt=""
                />
                <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-lg font-semibold text-primary">
                      Tacod bell
                    </h1>
                    <p className="font-semibold text-primary text-sm">
                      <span className="text-secondary-200">
                        <StarIcon fontSize="small" />
                      </span>{" "}
                      4.6/5
                    </p>
                  </div>
                  <p className="block text-primary font-medium text-base pt-px">
                    Cyberjaya
                  </p>
                  <p className="block text-sm">Homemade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News section */}
        <section className="flex flex-col justify-start items-center w-full my-20">
          <div className="w-full">
            <h1 className="text-primary font-semibold text-lg mb-5">
              Cyberjaya <span className="text-secondary-200">News</span>
            </h1>
            <div className="grid grid-cols-2 gap-10">
              {/* item box */}
              <div className="w-full flex flex-row h-40 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px">
                <div className="w-52 h-40 flex justify-center items-center">
                  <img
                    className="object-cover w-52 h-36"
                    src="assets/img/Taco_Bell.png"
                    alt=""
                  />
                </div>
                <div className="border-l-2 border-primary w-full p-2 relative">
                  <h1 className="font-bold text-xl text-primary">
                    Amaran Hujan Lebat Hari Ini
                  </h1>
                  <p className="pt-2 text-primary font-normal text-md">
                    Orang ramai dinasihatkan sentiasa merujuk laman web
                    www.met.gov.my dan semua media sosial serta memuat turun
                    aplikasi myCuaca bagi maklumat yang terkini dan sahih
                  </p>
                  <p className="text-sm text-primary font-medium pt-2 absolute right-4">
                    3 March 2023
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-row h-40 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px">
                <div className="w-52 h-40 flex justify-center items-center">
                  <img
                    className="object-cover w-52 h-36"
                    src="assets/img/Taco_Bell.png"
                    alt=""
                  />
                </div>
                <div className="border-l-2 border-primary w-full p-2 relative">
                  <h1 className="font-bold text-xl text-primary">
                    Amaran Hujan Lebat Hari Ini
                  </h1>
                  <p className="pt-2 text-primary font-normal text-md">
                    Orang ramai dinasihatkan sentiasa merujuk laman web
                    www.met.gov.my dan semua media sosial serta memuat turun
                    aplikasi myCuaca bagi maklumat yang terkini dan sahih
                  </p>
                  <p className="text-sm text-primary font-medium pt-2 absolute right-4">
                    3 March 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
