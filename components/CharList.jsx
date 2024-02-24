/* eslint-disable @next/next/no-img-element */
import React from "react";
import CharCard from "./CharCard";

export const CharList = ({ data }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-medium title-font mb-4 text-white">
              Characters
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Evergreem Star Wars Characters
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {data?.slice(0, 9).map((item, index) => (

            <CharCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
