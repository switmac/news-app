import axios from "axios";

const API_KEY = "e6814d1de62d46b49fda951fcfde4063";
const ROOT_URL = "http://newsapi.org/v2";

const mapNewsParams = filter => {
  return {
    apiKey: API_KEY,
    country: filter.topic === "everything" ? null : filter.country,
    q: filter.searchText
  };
};

export const getNewsResults = filter => {
  const url = `${ROOT_URL}/${filter.topic}`;

  const params = mapNewsParams(filter);
  return axios.get(url, { params });
};
