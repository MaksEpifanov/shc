import axios from "axios";

const http = axios.create({
  baseURL: "http://engine.hotellook.com/api/v2/",
  headers: {
    "Content-type": "application/json",
  },
});

export default http;
