import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import SelectDates from "@/src/components/BookNow/Modals/SelectDatesModal";

const IconWithDetails = ({ duration, pickUpAndDrop, dates }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDates] = useState();
  const [selectedMonth, setSelectedMonth] = useState();

  const clickBookNow = () => {
    setShowModal(true);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };
  const handleDateClick = (date) => {
    setSelectedDates(date);
  };

  return (
    <>
      <div className="bg-white flex ">
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Please Select Dates{" "}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex gap-4">
                      {dates.map((dd) => (
                        <button
                          onClick={() => handleMonthClick(dd.month)}
                          className={`${
                            selectedMonth === dd.month
                              ? "bg-blue-500 text-white"
                              : "bg-transparent text-black"
                          } p-2 rounded`}
                        >
                          {dd.month}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-9">
                      {dates
                        .find((monthData) => monthData.month === selectedMonth)
                        ?.dates.map((date) => (
                          <button
                            onClick={() => handleDateClick(date)}
                            className={`${
                              selectedDate === date
                                ? "bg-blue-500 text-white"
                                : "bg-transparent text-black"
                            } p-2 rounded cursor-pointer`}
                          >
                            {date}
                          </button>
                        ))}
                    </div>
                    {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p> */}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className="flex justify-evenly w-1/2 py-10 ">
          <div>
            <div className="w-20 h-20 bg-[#FAA935] rounded-full flex flex-col items-center justify-center">
              <BiTimeFive className="text-white text-4xl" />
            </div>
            <p className="mt-2 text-black text-xl">Duration</p>
            <p className="mt-2 text-black text-2xl"> {duration}</p>
          </div>
          <div>
            <div className="w-20 h-20 bg-[#FAA935] rounded-full flex flex-col items-center justify-center">
              <FaLocationDot className="text-white text-4xl" />
            </div>
            <p className="mt-2 text-black text-xl">Pick & Drop</p>
            <p className="mt-2 text-black text-2xl"> {pickUpAndDrop}</p>
          </div>
        </div>
        <div className="items-center self-center">
          <button
            onClick={clickBookNow}
            className="bg-[#FAA935] text-white p-4 rounded-xl items-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default IconWithDetails;
