"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Empty from "@/components/ui/empty";
import VideosContent from "@/components/videos-content";

import { Serie } from "@/types/api";
import Spinner from "@/components/ui/Spinner";
import { getSearchVideos } from "@/utils/sanity";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(async () => {
      if (term.length > 2) {
        setLoading(true);
        try {
          const { data, totalItems } = await getSearchVideos(
            searchTerm,
            currentPage,
            itemsPerPage
          );
          setSearchResults(data);
          setLoading(false);
          setTotalItems(totalItems);
        } catch (err) {
          console.log("error", err);
          setLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 500);
    setDebounceTimer(newTimer);
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="w-full mt-[118px] max-w-[1214px] mx-auto pb-[100px] max-sm:w-[90%]">
      <div className="flex flex-col gap-8 mb-10">
        <h1 className="text-black/60 font-bold text-4xl capitalize">Browser</h1>

        <input
          placeholder="Search Here... "
          className="border-0 w-full text-black text-md bg-transparent border-blue-500/50 border-b py-2 px-3 shadow-sm outline-none focus:ring-0"
          onChange={handleSearch}
        />
      </div>
      {loading && <Spinner />}
      {searchResults.length > 0 && searchTerm.length > 2 && (
        <>
          <div className="gap-16 grid grid-cols-3 max-sm:w-[90%] mx-auto max-sm:grid-cols-1">
            {searchResults.map((serie: Serie) => (
              <VideosContent
                key={serie._id}
                title={serie.title}
                image={serie.thumbnail}
                id={serie._id}
                description={serie.description}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(totalItems / itemsPerPage)}
              onPageChange={handlePageClick}
              containerClassName={
                "flex items-center space-x-2 flex-wrap justify-center"
              }
              activeClassName={
                "text-white py-2 px-4 rounded border-2 border-purpleBase"
              }
              previousClassName={
                "py-2 px-4 rounded bg-purpleBase hover:bg-[#3C3C3C] text-white/90 transition font-bold"
              }
              nextClassName={
                "py-2 px-4 rounded bg-purpleBase hover:bg-[#3C3C3C] text-white/90 transition font-bold"
              }
              disabledClassName={"opacity-50 cursor-not-allowed"}
              pageClassName={"text-white py-2 px-4 rounded bg-black/50 "}
            />
          </div>
        </>
      )}
      {!loading && searchResults.length === 0 && searchTerm.length > 2 && (
        <div className="flex justify-center">
          <Empty />
        </div>
      )}
    </div>
  );
}
