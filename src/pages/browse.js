import React from "react";
import BrowseContainer from "../containers/browse";
import { FooterContainer } from "../containers/footer";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-fliter";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return (
    <>
      <BrowseContainer slides={slides} /> <FooterContainer />
    </>
  );
};

export default Browse;
