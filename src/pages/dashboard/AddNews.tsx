import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";

import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import { addNews } from "../../features/news/newsSlice";

function AddNews() {
    const selectIsOpen = (state: RootState) => state.resize;
    const { isOpen } = useSelector(selectIsOpen);
    const dispatch = useDispatch<any>();

    useEffect(() => { }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            newsTitle: "",
            newsInfo: "",
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(addNews(values));
        },
    });

    return (
        <div className="w-full flex flex-row">
            <div className="fixed">
                <Sidenav />
            </div>
            <div
                className={`w-full duration-300 ${isOpen === true ? "ml-20" : "ml-60"}`}
            >
                <section className="min-h-screen py-5 px-10 text-primary">
                    <h1 className="font-medium text-2xl mt-10">News</h1>
                    <form onSubmit={formik.handleSubmit} className="mt-14">
                        <div className="md:w-3/5 w-full border-2 border-primary shadow-lg rounded-md text-primary p-10">
                            <h1 className="font-semibold text-xl mb-5">
                                News <span className="text-secondary-200">Information</span>
                            </h1>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="">
                                    <label className="block text-sm font-semibold mb-2">
                                        News Title
                                    </label>
                                    <input
                                        className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                                        type="text"
                                        name="newsTitle"
                                        placeholder=""
                                        value={formik.values.newsTitle}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="">
                                    <label className="block text-sm font-semibold mb-2">
                                        News Image
                                    </label>
                                </div>

                                <div className="">
                                    <label
                                        className="block text-sm font-semibold mb-2"
                                        htmlFor=""
                                    >
                                        News Item
                                    </label>
                                    <textarea
                                        className="border-2 border-primary w-full text-sm rounded-md p-2 outline-secondary-200"
                                        name="newsInfo"
                                        id=""
                                        cols={30}
                                        rows={10}
                                        value={formik.values.newsInfo}
                                        onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <PrimaryButton style="mt-5" type="submit" label="Submit" />
                    </form>
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default AddNews