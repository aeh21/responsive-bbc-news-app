import useSWR from "swr";

import axiosInstance from "../../axios/instance";
import { NEWS_API_URL } from "../../constants";
import { Article } from "../../types";

interface ApiResponse {
  articles: Article[];
  status: string;
  totalResults: number;
}

const useFetchTopHeadlines = (
  countryCode: string | undefined,
  page: number,
  pageSize: number
) => {
  const cacheKey = `${NEWS_API_URL}-${countryCode}`;

  return useSWR<ApiResponse, unknown>(cacheKey, () =>
    axiosInstance
      .get(
        `${NEWS_API_URL}/top-headlines?country=${countryCode}&page=${page}&pageSize=${pageSize}`
      )
      .then((response) => response.data)
  );
};

export default useFetchTopHeadlines;
