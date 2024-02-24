/* eslint-disable @next/next/no-img-element */
import React from "react";
import PlanetCard from "./PlanetCard";

export const PlanetList = ({ data }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-medium title-font mb-4 text-white">
              Planets
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore the Planets of star Wars
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {data?.slice(0, 9).map((item, index) => (

            <PlanetCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
