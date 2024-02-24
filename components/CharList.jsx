/* eslint-disable @next/next/no-img-element */
import React from "react";
import CharCard from "./CharCard";

export const CharList = ({ data }) => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-white">
              Characters
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Evergreem Star Wars Characters
            </p>
          </div>

          <div class="flex flex-wrap -m-4">
            {data?.map((item, index) => (

            <CharCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
