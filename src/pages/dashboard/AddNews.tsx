import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";

// redux library
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { addNews } from "../../features/news/newsSlice";

// component
import { PrimaryButton } from "../../components/Button";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";

function AddNews() {
  const selectIsOpen = (state: RootState) => state.resize;
  const { isOpen } = useSelector(selectIsOpen);

  const selectNews = (state: RootState) => state.news;
  const { message } = useSelector(selectNews);

  const fileInputRef = useRef<any>(null);

  const dispatch = useDispatch<any>();

  const [files, setFiles] = useState<File[]>([]);
  const [newsItem, setNewsItem] = useState<[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: any) => {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file: any) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    },
  });

  // remove image
  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  // display image below upload file
  const thumbs = files.map((file: any, index: number) => (
    <div
      className="inline-flex relative border rounded-md my-4 mr-4 w-24 h-24 p-2 box-border"
      key={file.name}
    >
      <div className="flex min-w-0 overflow-hidden ">
        <img
          src={file.preview}
          className="block w-auto h-full object-cover"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
      <button
        className="absolute top-8 left-3 opacity-30 rounded text-center w-3/4 h-6 bg-secondary-200 text-xs hover:opacity-100"
        onClick={() => removeFile(index)}
      >
        Remove
      </button>
    </div>
  ));

  useEffect(() => {
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      newsTitle: "",
      newsInfo: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("newsTitle", values.newsTitle);
      formData.append("newsInfo", values.newsInfo);

      for (const file of files) {
        formData.append("file", file);
      }

      dispatch(addNews(formData));

      setFiles([]);
      formik.resetForm();
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
        <section className="min-h-screen container py-5 px-10 text-primary">
          <h1 className="font-medium text-2xl mt-10">News</h1>
          <form onSubmit={formik.handleSubmit} className="mt-14">
            <div className="md:w-3/5 w-full border-2 border-primary shadow-lg rounded-md text-primary p-10">
              <h1 className="font-semibold text-xl mb-5">
                News <span className="text-secondary-200">Information</span>
              </h1>
              {message !== "" && message !== null ? (
                <Alert className="my-4 rounded-lg" severity="success">
                  <span className="text-success-600 font-semibold">
                    {message}
                  </span>
                </Alert>
              ) : null}
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
                  <div
                    {...getRootProps({
                      className:
                        "dropzone border border-dashed h-24 flex justify-center items-center rounded hover:bg-text-300 shadow-md hover:shadow cursor-pointer",
                    })}
                  >
                    <input {...getInputProps()} ref={fileInputRef} />
                    <p className="text-sm">
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                  <aside className="flex flex-row flex-wrap">{thumbs}</aside>
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

export default AddNews;
