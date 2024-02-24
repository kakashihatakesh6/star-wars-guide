/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MovieCard = ({ data }) => {
  console.log("MovieData car", data);
  const router = useRouter();
  return (
    <div className="p-4 lg:w-1/3 md:w-1/3">

      <div className="h-full flex flex-col hover:bg-blue-900
       items-center bg-black border-2 text-white border-white py-6 px-2">
        <div className="w-full space-y-4 px-3">
          <h4 className="text-normal">Episode - {data.episode_id}</h4>
          <h2 className="text-white mb-3 font-bold text-3xl space-y-3">{data.title}</h2>

          <Link href={`http://localhost:3000/movie/${data?.title}`} className="flex w-fit justify-end hover:bg-white hover:text-black text-slate-300 border-2 my-3 py-2 px-6 rounded-sm border-slate-100">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
