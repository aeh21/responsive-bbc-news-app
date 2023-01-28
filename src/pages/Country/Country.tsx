import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFetchTopHeadlines from "../../api/useFetchTopHeadlines";
import ArticleCard from "../../components/ArticleCard";
import HeroArticle from "../../components/HeroArticle";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Article } from "../../types";
import checkIfNextPageAvailable from "../../utils/checkIfNextPageAvailable";

const Country = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [articles, setArticles] = useState<Article[]>([]);
  const [heroArticle, setHeroArticle] = useState<Article | undefined>(
    undefined
  );
  const [hasMoreArticles, setHasMoreArticles] = useState(true);

  const { countryCode } = useParams();

  const {
    data: apiData,
    error,
    isLoading,
  } = useFetchTopHeadlines(countryCode, page, pageSize);

  useEffect(() => {
    const apiArticles = apiData?.articles;

    if (apiArticles) {
      setArticles((prevState) => [...prevState, ...apiArticles]);
    }
  }, [apiData, page]);

  useEffect(() => {
    if (articles.length > 0) setHeroArticle(articles[0]);
  }, [articles]);

  useEffect(() => {
    const totalResults = apiData?.totalResults;

    if (totalResults) {
      const nextPageAvailable = checkIfNextPageAvailable(
        page,
        pageSize,
        apiData.totalResults
      );
      setHasMoreArticles(nextPageAvailable);
    }
  }, [page, pageSize, apiData]);

  const handleLoadMoreArticles = (page: number) => {
    setPage(page + 1);
  };

  if (error)
    return (
      <div className="container mx-auto">
        <h1>
          An error has occured, please try again. If the error persist, contact
          us.
        </h1>
      </div>
    );

  if (isLoading && page === 1) return <LoadingSpinner size="large" />;

  console.log(apiData && articles.length > 0)

  if (articles.length > 0) {
    return (
      <div className="flex flex-col space-y-8 container mx-auto py-8">
        {heroArticle && <HeroArticle {...heroArticle} />}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.slice(1, articles.length).map((article) => {
            return (
              <ArticleCard
                key={article.url}
                className="col-span-1"
                {...article}
              />
            );
          })}
        </div>

        {hasMoreArticles && (
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="w-48 h-12 inline-block px-6 py-4 bg-bbc-blue text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-bbc-red focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-bbc-blue transition duration-150 ease-in-out"
              onClick={() => handleLoadMoreArticles(page)}
            >
              {isLoading && page !== 1 ? (
                <LoadingSpinner />
              ) : (
                `Load ${pageSize} more`
              )}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <p>There are no articles to display</p>
    </div>
  );
};

export default Country;
