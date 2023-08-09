import React, { useEffect } from "react";
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";
import dateFormat from "dateformat";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { getNews } from "../../features/news/newsSlice";

function NewsPage() {
  const dispatch = useDispatch<any>();
  const selectNews = (state: RootState) => state.news;
  const { newsTitle, newsInfo, newsDate }: any = useSelector(selectNews);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNews(id));
  }, [dispatch, newsTitle, newsInfo, newsDate]);

  console.log(newsInfo);

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
              <div className="md:w-9/12 w-full">
                <h1 className="font-semibold text-4xl text-primary">
                  {newsTitle}
                </h1>
                <p className="text-sm text-text-200 font-medium mt-1">
                  {dateFormat(newsDate, "dddd, dS mmmm yyyy")}
                </p>
                <div className="mt-10 whitespace-pre-wrap">
                  <p className="text-primary">{newsInfo}</p>
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
