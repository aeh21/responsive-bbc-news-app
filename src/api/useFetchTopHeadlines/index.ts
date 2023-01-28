import useSWR from "swr";

import axiosInstance from "../../axios/instance";
import { NEWS_API_URL } from "../../constants";

const useFetchTopHeadlines = (countryCode: string | undefined) => {
  const cacheKey = `${NEWS_API_URL}-${countryCode}`;

  return useSWR<any, unknown>(cacheKey, () =>
    axiosInstance.get(`${NEWS_API_URL}/top-headlines?country=${countryCode}`).then((response) => response.data)
  );
};

export default useFetchTopHeadlines;
