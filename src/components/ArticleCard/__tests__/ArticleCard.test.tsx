import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ArticleCard from "..";
import { Article } from "../../../types";

const mockArticle: Article = {
  source: {
    id: "cnn",
    name: "CNN",
  },
  author:
    "Nouran Salahieh, Jamiel Lynch, Chuck Johnston, Shawn Nottingham, Andy Rose, Phil Gast",
  title: "Mock title",
  description:
    "Protesters across the US were preparing to march on Saturday, one day after the release of video showing the horrific police beating of Tyre Nichols in Memphis.",
  url: "https://mock-url.com",
  urlToImage: "https://mock-url-to-image.com",
  publishedAt: "2023-01-28T18:02:00Z",
  content:
    "Editors Note: This article contains graphic videos and descriptions of violence.\r\nProtesters across the US were holding marches and rallies on Saturday, one day after the release of video showing the… [+6721 chars]",
};

describe("ArticleCard", () => {
  it("should render the image, title and publishedAt values", () => {
    const screen = render(
      <MemoryRouter>
        <ArticleCard {...mockArticle} />
      </MemoryRouter>
    );

    expect(screen.getByText("Mock title")).toBeInTheDocument();
    expect(screen.getByAltText("Mock title - header")).toBeInTheDocument();
    expect(screen.getByText(/28-01-2023, 18:02/)).toBeInTheDocument();
  });
});
