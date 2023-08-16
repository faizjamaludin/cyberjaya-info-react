import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";

import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';

function News() {
  const selectIsOpen = (state: RootState) => state.resize;
  const { isOpen } = useSelector(selectIsOpen);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => { }, [dispatch]);

  const columns = [
    {
      name: 'Title',
      selector: (row: any) => row.title,
    },
    {
      name: 'Year',
      selector: (row: any) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]

  return (
    <div className="w-full flex flex-row">
      <div className="fixed">
        <Sidenav />
      </div>
      <div
        className={`w-full duration-300 ${isOpen === true ? "ml-20" : "ml-60"}`}
      >
        <section className="min-h-screen w-11/12 py-5 px-10 text-primary">
          <div className="flex justify-between items-center mt-10">
            <h1 className="font-medium text-2xl">News</h1>
            <PrimaryButton label="+ Add News" onClick={() => { navigate('/dashboard/news/addnews') }} />
          </div>
          <DataTable
            columns={columns}
            data={data}
          />

        </section>
        <Footer />
      </div>
    </div>
  );
}

export default News;
