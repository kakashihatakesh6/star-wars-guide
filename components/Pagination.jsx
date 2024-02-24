import React, { useState } from "react";

const Pagination = ({ setCharData, set }) => {
  const [page, setPage] = useState(1);

  const handlePrevClick = async ({setFunction}) => {
    if (page !== 1) {
      setPage((page) => setPage(page - 1));
    }
  };
  const handleNextClick = async () => {
    console.log("Next")
    setPage((page) => setPage(page + 1));
    FetchData(page+1)
  };

  const FetchData = async (pageNo) => {
    try {
      setIsLoading(true)
      const endpoint = `https://swapi.dev/api/people/?page=${pageNo}`;
      const res = await axios.get(endpoint);
      const data = res.data.results;
      setCharData(data);
      // setTotalItems(res.data.count);
      // console.log(data)
      setFunction(data)
      setIsLoading(false)
    } catch (error) {
      console.log("Some Error Occurred!")
    }
  }




  return (
    <div className="container px-20 py-10 mx-auto">
      
      <div className="w-full justify-between flex flex-row items-center">
        <button
          disabled={page <= 1}
          onClick={handlePrevClick}
          className="flex w-fit justify-end text-slate-300 hover:bg-white hover:text-black border-2 my-3 py-2 px-6 rounded-sm border-slate-100"
        >
          Previous
        </button>

        <div className="page">
          <span className="py-2 px-4 bg-slate-800 text-white">1</span>
        </div>

        <button
          onClick={handleNextClick}
          className="flex w-fit justify-end text-slate-300 hover:bg-white hover:text-black border-2 my-3 py-2 px-6 rounded-sm border-slate-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
