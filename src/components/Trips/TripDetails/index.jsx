import { React, useEffect, useState } from "react";
import DatesCosting from "./DatesCosting";
import ContentDetails from "../../contentDetails";

const Tripdetails = ({
  description,
  itineary,
  dates,
  inclusion,
  exclusion,
}) => {
  const tabItems = [
    "Description",
    "Itineary",
    "Dates & Costing",
    "Inclusion",
    "Exclusion",
  ];
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <>
      <div
        className="px-4 border-1 
border-gray-800 my-8 shadow-2xl bg-white md:px-8"
      >
        <ul
          role="tablist"
          className=" hidden my-6  max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 rounded-lg lg:flex xl:flex md:flex sm:flex"
        >
          {tabItems.map((item, idx) => (
            <li key={idx} className="py-2">
              <button
                role="tab"
                aria-selected={selectedItem == idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                className={`py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-white active:bg-white/50 font-medium ${
                  selectedItem == idx
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-gray-600"
                }`}
                onClick={() => {
                  setSelectedItem(idx);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative text-gray-500 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <select
            value={tabItems[selectedItem]}
            className="p-3 w-full hidden bg-white 2xs:visible appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600"
            onChange={(e) => setSelectedItem(tabItems.indexOf(e.target.value))}
          >
            {tabItems.map((item, idx) => (
              <option key={idx} idx={idx}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* <p>{dates.map((s) => console.log("sss", s))}</p> */}
        <div className="max-w-screen-xl mx-auto px-2.5 bg-white items-center  ">
          {selectedItem === 0 && <ContentDetails data={description} />}
          {selectedItem === 1 && <ContentDetails data={itineary} />}
          {selectedItem === 2 && <DatesCosting content={dates} />}
          {selectedItem === 3 && <ContentDetails data={inclusion} />}
          {selectedItem === 4 && <ContentDetails data={exclusion} />}
        </div>
      </div>
    </>
  );
};

export default Tripdetails;
