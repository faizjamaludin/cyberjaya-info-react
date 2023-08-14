import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { getAllNews } from "../../features/news/newsSlice";

function NewsPage() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const selectNews = (state: RootState) => state.news;
  const { newsItem }: any = useSelector(selectNews);

  console.log(newsItem);

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  return (
    <div className="w-full justify-center items-center flex flex-col">
      <Topnav />
      <div className="container flex justify-center items-center flex-col">
        <div className="w-full md:py-10 md:px-0 p-10">
          <h1 className="font-semibold text-2xl text-primary">News</h1>
          {!newsItem ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 grid-flow-cols gap-10 mt-10">
                {/* item box */}
                {newsItem.slice(0, 4).map((item: any) => (
                  <div
                    key={item._id}
                    onClick={() => {
                      navigate("/news/" + item._id);
                    }}
                    className="w-full flex flex-row h-40 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px"
                  >
                    <div className="w-52 h-40 flex justify-center items-center">
                      <img
                        className="object-contain w-52 h-36"
                        src="/assets/img/Taco_Bell.png"
                        alt=""
                      />
                    </div>
                    <div className="border-l-2 border-primary w-full p-2 flex flex-col">
                      <h1 className="font-bold text-xl text-primary">
                        {item.newsTitle.length > 70
                          ? item.newsTitle.substring(0, 70).trimEnd() + "..."
                          : item.newsTitle}
                      </h1>
                      <p className="pt-2 text-primary font-normal text-md flex-1 line-clamp-2">
                        {item.newsInfo?.substring(0, 100).trimEnd() + "..."}
                      </p>
                      <p className="text-sm text-primary text-end font-medium pt-2">
                        {dateFormat(item.date, "mmmm dS, yyyy")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;

// <div className="grid md:grid-cols-2 grid-rows-6 grid-flow-rows gap-10">
//                   item box
//                   {newsItem.slice(0, 4).map((item: any) => (
//                     <div
//                       key={item._id}
//                       onClick={() => {
//                         navigate("/news/" + item._id);
//                       }}
//                       className="w-full flex flex-row h-40 cursor-pointer border-2 border-primary rounded-xl shadow-xl hover:shadow-md hover:translate-x-px hover:translate-y-px"
//                     >
//                       <div className="w-52 h-40 flex justify-center items-center">
//                         <img
//                           className="object-contain w-52 h-36"
//                           src="assets/img/Taco_Bell.png"
//                           alt=""
//                         />
//                       </div>
//                       <div className="border-l-2 border-primary w-full p-2 flex flex-col">
//                         <h1 className="font-bold text-xl text-primary">
//                           {item.newsTitle.length > 70
//                             ? item.newsTitle.substring(0, 70).trimEnd() + "..."
//                             : item.newsTitle}
//                         </h1>
//                         <p className="pt-2 text-primary font-normal text-md flex-1 line-clamp-2">
//                           {item.newsInfo?.substring(0, 100).trimEnd() + "..."}
//                         </p>
//                         <p className="text-sm text-primary text-end font-medium pt-2">
//                           {dateFormat(item.date, "mmmm dS, yyyy")}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
