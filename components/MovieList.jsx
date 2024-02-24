/* eslint-disable @next/next/no-img-element */
import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ data }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white">
              Movie List
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Popular Star Wars Movies
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {data?.map((item, index) => (

            <MovieCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
