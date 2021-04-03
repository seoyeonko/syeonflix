import axios from "axios";

// configure for instance
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0faf0b378ce1f24a28c71164ad39f6aa",
    language: "en-US",
  },
});

api.get("tv/popular"); // relative url

export default api;
