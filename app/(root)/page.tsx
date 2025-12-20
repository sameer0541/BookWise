import NewRelease from "@/components/NewRelease";
import React from "react";
import { sampleBooks } from "@/constants";
import BookList from "@/components/BookList";

const Home = () => {
  return (
    <>
      <NewRelease {...sampleBooks[0]} />
      <BookList sampleBooks={sampleBooks} />
    </>
  );
};

export default Home;
