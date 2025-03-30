"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import VideosContent from "@/components/videos-content";
import { Serie } from "@/types/api";
import { getDashboardData } from "@/utils/api";

export default function Videos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data, totalItems } = await getDashboardData(
          currentPage,
          itemsPerPage
        );
        setData(data);
        setLoading(false);
        setTotalItems(totalItems);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="w-full max-w-[1114px] mx-auto py-[120px] space-y-10">
      <h1 className="text-white font-bold text-4xl">Our Recommendations</h1>
      {data.length && (
        <>
          <div className="gap-16 grid grid-cols-3 max-sm:w-[90%] mx-auto max-sm:grid-cols-1 content-center">
            {loading ? (
              <span className="text-white font-bold text-2xl  text-center   w-screen">
                Loading....
              </span>
            ) : (
              <>
                {data.map((serie: Serie) => (
                  <VideosContent
                    key={serie.id}
                    title={serie.title}
                    image={serie.thumbnail}
                    id={serie.id}
                  />
                ))}
              </>
            )}
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
    </div>
  );
}
