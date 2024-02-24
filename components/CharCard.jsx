/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CharCard = ({ data }) => {
  console.log("MovieData car", data);
  const router = useRouter();
  return (
    <>
    
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center  hover:bg-blue-900
       items-center bg-black border-2 text-white border-white py-6 px-2 flex flex-col">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://dummyimage.com/302x302"
          />
          {/* <p class="leading-relaxed">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p> */}
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mb-4"></span>
          <h2 class="text-white font-medium title-font tracking-wider text-sm">
           {data.birth_year}
          </h2>
          <p class="text-white text-3xl">{data.name}</p>
        </div>
      </div>
    </>
  );
};

export default CharCard;
