import Link from "next/link";
import React, { useState } from "react";

const Pagination = ({setCharData, set}) => {
  const [page, setPage] = useState(1);


  const handlePrevClick = () => {
    
  }
  const handleNextClick = () => {

  }




  return (
    <div className="container px-20 py-10 mx-auto">
      <div className="w-full justify-between flex flex-row items-center">
        <button disabled={page <= 1}
          onClick={() => {handlePrevClick}}
          class="flex w-fit justify-end text-slate-300 border-2 my-3 py-2 px-6 rounded-sm border-slate-100"
        >
         Previous
        </button>

        <div className="page">
          <span className="py-2 px-4 bg-slate-800 text-white">1</span>
        </div>



        <button
          
          onClick={() => handleNextClick}
          class="flex w-fit justify-end text-slate-300 border-2 my-3 py-2 px-6 rounded-sm border-slate-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
