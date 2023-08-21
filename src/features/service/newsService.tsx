import axios from "axios";

const API_URL = "http://localhost:3001/news/";

const addNews = async (newsData: FormData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axios.post(API_URL, newsData, config);

  return response.data;
};

const getAllNews = async () => {
  const response = await axios.get(API_URL + "all");

  return response.data;
};

const getNews = async (id: any) => {
  const response = await axios.get(API_URL + id);

  return response.data;
};

const newsService = {
  addNews,
  getAllNews,
  getNews,
};

export default newsService;
