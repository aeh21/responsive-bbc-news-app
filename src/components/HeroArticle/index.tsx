import cx from "classnames";
import { Link } from "react-router-dom";

import { Article } from "../../types";
import formatPublicationDate from "../../utils/formatPublicationDate";
import getArticleImageSrc from "../../utils/getArticleImageSrc";

interface Props extends Article {
  className?: string;
}
const HeroArticle = ({
  title,
  publishedAt,
  url,
  urlToImage,
  description,
  className = "",
}: Props) => {
  return (
    <div className={cx("flex flex-col md:flex-row bg-white", className)}>
      <Link to={url} className="md:w-3/5 md:mr-4">
        <img
          src={getArticleImageSrc(urlToImage)}
          className="object-cover w-full h-72 md:h-80 mb-4"
          alt={`${title} - header`}
        />
      </Link>

      <div className="flex flex-col mb-4 md:w-2/5">
        <Link to={url} className="mb-3 order-1">
          <h2 className="text-2xl hover:text-bbc-red hover:underline font-bold">
            {title}
          </h2>
        </Link>

        <div className="flex flex-wrap text-xs mb-3 order-3 md:order-2">
          Published {formatPublicationDate(publishedAt)}
        </div>

        <h3 className="text-xl hidden md:inline-block order-2 md:order-3">{description}</h3>
      </div>
    </div>
  );
};

export default HeroArticle;
