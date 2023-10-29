import React, { useState } from "react";

const DateDetails = ({ DateDetails }) => {
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
      <h4 className="font-bold">Dates & Costing</h4>
      <div className="flex gap-4">
        {DateDetails.map((dd) => (
          <p onClick={() => handleMonthClick(dd.month)}>{dd.month}</p>
        ))}
      </div>
      <div>
        {DateDetails.find(
          (monthData) => monthData.month === selectedMonth
        )?.dates.map((date) => (
          <p>{date}</p>
        ))}
      </div>
    </div>
  );
};

export default DateDetails;
