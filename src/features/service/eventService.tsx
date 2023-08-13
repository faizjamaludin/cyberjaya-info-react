import axios from "axios";

const API_URL = "http://localhost:3001/event/";

const addEvent = async (eventData: any) => {
    const response = await axios.post(API_URL, eventData);

    console.log(response.data);
    return response.data;
};

const getAllEvent = async () => {
    const response = await axios.get(API_URL + "all");

    return response.data;
};

const getEvent = async (id: any) => {
    const response = await axios.get(API_URL + id);

    return response.data;
};

const eventService = {
    addEvent,
    getAllEvent,
    getEvent
};

export default eventService;
