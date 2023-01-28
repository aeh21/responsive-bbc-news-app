import getArticleImageSrc from "..";
import { DEFAULT_ARTICLE_HEADER_IMAGE } from "../../../constants";

describe('getArticleImageSrc', () => {
    it('should return the given src url when provided', () => {
        const src = 'https://test-url.com';

        expect(getArticleImageSrc(src)).toEqual(src);
    });

    it('should return the default url if the src is null', () => {
        expect(getArticleImageSrc(null)).toEqual(DEFAULT_ARTICLE_HEADER_IMAGE);
    })
})