import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { getNews } from "../../features/news/newsSlice";

function NewsPage() {
  const dispatch = useDispatch<any>();
  const selectNews = (state: RootState) => state.news.newsItem;
  const item: any = useSelector(selectNews);
  const { id } = useParams();

  console.log(item);

  useEffect(() => {
    dispatch(getNews(id));
  }, [dispatch]);

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
                  {item?.newsTitle}
                </h1>
                <div className="mt-10 md:w-9/12 w-full">
                  <p className="text-primary">{item?.newsInfo}</p>
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
