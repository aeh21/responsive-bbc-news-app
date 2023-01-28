import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchTopHeadlines from "../../api/useFetchTopHeadlines";
import ArticleCard from "../../components/ArticleCard";
import HeroArticle from "../../components/HeroArticle";

const Country = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { countryCode } = useParams();

  const {
    data: apiData,
    error,
    isLoading,
  } = useFetchTopHeadlines(countryCode, page, pageSize);

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  const articles = apiData?.articles;

  if (articles && articles.length > 0) {
    const heroArticle = articles[0];

    return (
      <div className="container mx-auto py-8">
        <HeroArticle {...heroArticle} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.slice(1, 5).map((article) => {
            return (
              <ArticleCard
                key={article.url}
                className="col-span-1"
                {...article}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return <>No Articles to display</>;
};

export default Country;
