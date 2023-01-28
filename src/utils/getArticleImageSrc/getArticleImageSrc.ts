import { Article } from "../../types";

const getArticleImageSrc = (urlToImage: Article['urlToImage']) => {
    const imageSrc = urlToImage
    ? urlToImage
    : "/img/article-header-placeholder.jpg";

    return imageSrc;
}

export default getArticleImageSrc;