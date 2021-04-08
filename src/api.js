import axios from "axios";

// configure for instance
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0faf0b378ce1f24a28c71164ad39f6aa",
    language: "en-US",
  },
});

// Create Two Objects: all of requests, functions
export const moviesApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upcoming: () => api.get("/movie/upcoming"),
  popular: () => api.get("/movie/popular"),
  movieDetails: (id) =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const TVApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  showDtails: (id) =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
