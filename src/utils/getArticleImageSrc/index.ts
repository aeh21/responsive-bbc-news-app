import { DEFAULT_ARTICLE_HEADER_IMAGE } from "../../constants";
import { Article } from "../../types";

const getArticleImageSrc = (urlToImage: Article["urlToImage"]) => {
  const imageSrc = urlToImage ? urlToImage : DEFAULT_ARTICLE_HEADER_IMAGE;

  return imageSrc;
};

export default getArticleImageSrc;
