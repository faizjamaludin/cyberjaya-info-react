import React from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import { useFormik } from 'formik';
import { PrimaryButton } from '../../components/Button'
import StarIcon from '@mui/icons-material/Star';

interface SearchProps {
  search: String;
}

function Home() {

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted!', values);
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
            <h1 className="font-semibold text-5xl text-primary text-center">Find Nearby <span className="text-secondary-200">Attractions</span></h1>
          </div>
          {/* grid 3 */}
          <div className="w-full mt-20 flex justify-center items-center">
            <form className="w-3/4 flex flex-row border-2 border-primary px-2 py-2 rounded-md" onSubmit={formik.handleSubmit}>
              <input className="w-full outline-0 font-normal text-sm" name="search" type="text" placeholder="What's in your mind?" onChange={formik.handleChange} value={formik.values.search} />
              <PrimaryButton type="submit" label="Search" />
            </form>
          </div>
        </header>

        <section className="flex flex-col justify-start items-center w-full mt-20">
          <div className="">
            <h1 className="text-primary font-semibold text-lg mb-10">Recently <span className="text-secondary-200">Added</span></h1>
            <div className="grid grid-cols-7 gap-10">

              {/* item box */}
              <div className="w-48 h-60 border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px">
                <img className="w-48 h-36 object-contain" src="/assets/img/Taco_Bell.png" alt="" />
                <div className="border-t-2 border-primary mt-1 flex flex-col p-1">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-lg font-semibold text-primary">Tacod bell</h1>
                    <p className="font-semibold text-primary text-sm"><span className="text-secondary-200"><StarIcon fontSize="small" /></span> 4.6/5</p>
                  </div>
                  <p className="block text-primary font-medium text-base pt-px">Cyberjaya</p>
                  <p className="block text-sm">Homemade</p>
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
