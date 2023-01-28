import useSWR from "swr";

import axiosInstance from "../../axios/instance";
import { NEWS_API_URL } from "../../constants";

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const useFetchTopHeadlines = (countryCode: string | undefined) => {
  const cacheKey = `${NEWS_API_URL}-${countryCode}`;

  return useSWR<Article[], unknown>(cacheKey, () =>
    axiosInstance
      .get(`${NEWS_API_URL}/top-headlines?country=${countryCode}`)
      .then((response) => response.data.articles)
  );
};

export default useFetchTopHeadlines;
