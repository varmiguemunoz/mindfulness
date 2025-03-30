import React from "react";

interface FormattedDateProps {
  date: string;
  type: "post" | "featured";
}

function FormattedDate({ date, type }: FormattedDateProps) {
  const parsedDate = new Date(date);
  return (
    <time
      dateTime={parsedDate.toISOString()}
      className={
        type === "post"
          ? "text-sm text-lightGray font-light"
          : " md:text-3xl text-xl text-lightGray font-light"
      }
    >
      {parsedDate.toLocaleDateString("es", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}

export default FormattedDate;
