import React from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

function NewsPage() {
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
                <h1 className="font-semibold text-4xl text-primary mt-1">
                  Amaran Hujan Lebat Hari Ini
                </h1>
                <div className="mt-10 md:w-9/12 w-full">
                  <p className="text-primary">
                    Orang ramai dinasihatkan sentiasa merujuk laman web
                    www.met.gov.my dan semua media sosial serta memuat turun
                    aplikasi myCuaca bagi maklumat yang terkini dan sahih
                  </p>
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

export default NewsPage;
