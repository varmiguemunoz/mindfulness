"use client";

import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { getTypesContent } from "@/utils/sanity";
import Link from "next/link";
import { toast } from "sonner";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchTypedData = async () => {
      try {
        const data = (await getTypesContent()) as [];
        setData(data);
      } catch (error) {
        toast.error("Error fetching categories data");
        throw error;
      }
    };

    fetchTypedData();
  }, []);

  return (
    <div className="relative">
      <button className="flex items-center gap-2" onClick={toggleDropdown}>
        <span className="text-black/60 text-md font-normal">Categories</span>

        <MdArrowDropDown
          size={30}
          color="black"
          className={`${isOpen && "rotate-180"} transition-all duration-300`}
        />
      </button>

      {isOpen && (
        <div className="shadow-md bg-white absolute z-10 top-10 px-5 py-3">
          <ul className="flex flex-col gap-2">
            {data.map(({ name }, index) => (
              <li key={index} className="text-black/50 font-normal text-md">
                <Link href={`/dashboard/categories?value=${name}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
