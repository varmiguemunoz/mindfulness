"use client";

import { getVideosToCategories } from "@/utils/sanity";
import { Serie } from "@/types/api";

import VideosContent from "@/components/videos-content";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "sonner";

export default function Categories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const searchParams = useSearchParams();
  const category = searchParams.get("value");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data, totalItems } = await getVideosToCategories(
          currentPage,
          itemsPerPage,
          category || ""
        );
        setData(data);
        setLoading(false);
        setTotalItems(totalItems);
      } catch (err) {
        toast.error("Error fetching categories data");
        setLoading(false);
        throw err;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, category]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="w-full max-w-[1114px] mx-auto py-[120px] space-y-10">
      <h1 className="text-black/80 font-bold text-4xl">{category}</h1>
      {data.length && (
        <>
          <div className="gap-16 grid grid-cols-3 max-sm:w-[90%] mx-auto max-sm:grid-cols-1 content-center">
            {loading ? (
              <span className="text-black/70 font-bold text-2xl text-center w-screen">
                Loading....
              </span>
            ) : (
              <>
                {data.map((serie: Serie) => (
                  <VideosContent
                    key={serie._id}
                    title={serie.title}
                    image={serie.thumbnail}
                    id={serie.slug}
                    description={serie.description}
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
                "py-2 px-4 rounded bg-lavender hover:bg-[#3C3C3C] text-white/90 transition font-bold"
              }
              nextClassName={
                "py-2 px-4 rounded bg-lavender hover:bg-[#3C3C3C] text-white/90 transition font-bold"
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
