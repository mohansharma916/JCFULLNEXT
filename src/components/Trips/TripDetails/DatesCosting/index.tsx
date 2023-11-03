import React, { useState } from "react";
import DateDetails from "./DateDetails";

const DatesCosting = ({ content }) => {
  const [selectedDate, setSelectedDates] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };
  const handleDateClick = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="my-8">
      <h4 className="font-bold my-6">Dates & Costing</h4>
      <div className=" px-5">
        <div className="flex gap-4">
          {content.map((dd) => (
            <p
              onClick={() => handleMonthClick(dd.month)}
              className={`${
                selectedMonth === dd.month
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-black"
              } p-2 rounded`}
            >
              {dd.month}
            </p>
          ))}
        </div>
        <div className="flex justify-start gap-5 px-6">
          {content
            .find((monthData) => monthData.month === selectedMonth)
            ?.dates.map((date) => (
              <p>{date}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DatesCosting;
