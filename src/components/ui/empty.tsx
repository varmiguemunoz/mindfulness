import React from "react";

import { FaRobot } from "react-icons/fa";

export default function Empty() {
  return (
    <div className="px-10 py-10 w-[500px] flex flex-col justify-center items-center gap-5 border border-lightGray border-separate rounded-sm">
      <FaRobot
        size={50}
        className="bg-lightPurple rounded-full px-1 py-1"
        color="white"
      />

      <p className="text-lightGray text-md font-light text-center">
        Sorry, no results were found. Please check that you typed it correctly
        or perform a different search.
      </p>
    </div>
  );
}
