import cx from "classnames";
import { Link } from "react-router-dom";

import { Article } from "../../types";
import formatPublicationDate from "../../utils/formatPublicationDate/formatPublicationDate";
import getArticleImageSrc from "../../utils/getArticleImageSrc/getArticleImageSrc";

interface Props extends Article {
  className?: string;
}
const ArticleCard = ({
  title,
  publishedAt,
  url,
  urlToImage,
  className = "",
}: Props) => {
  return (
    <div className={cx("flex flex-col bg-white", className)}>
      <Link to={url}>
        <img
          src={getArticleImageSrc(urlToImage)}
          className="object-cover w-full h-72 md:h-48 mb-4"
          alt={`${title} - header`}
        />
      </Link>

      <div className="mb-4 flex flex-wrap mb-4">
        <Link to={url}>
          <h2 className="text-md hover:text-bbc-red hover:underline font-bold">
            {title}
          </h2>
        </Link>
      </div>

      <div className="flex flex-wrap mt-auto text-xs">
        Published {formatPublicationDate(publishedAt)}
      </div>
    </div>
  );
};

export default ArticleCard;
