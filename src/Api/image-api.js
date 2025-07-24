import axios from "axios";

const ACCESS_KEY = "vHao4uzFPqsuA4tneF1PlUIF39OQ6ZxThH3UXCGkv0E";
const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });

  return response.data;
};
