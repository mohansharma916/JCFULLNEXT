import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
// import Button from "../../Header/Button"
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { IconContext } from "react-icons";

const TourCard = ({ tour }) => {
  const {
    id,
    TripId,
    TripPhoto,
    TripPickAndDrop,
    TripDuration,
    TripTittle,
    Dates,
  } = tour;

  return (
    <>
      <Link
        // href={`/trips/${TripId}`}
        onClick={() => {
          toast.error("Please Login Before Continue");
        }}
        href={`/auth/login`}
      >
        <div className="w-60 cursor-pointer border border-neutral-500 bg-gray-50 rounded-2xl mr-4 mb-8 2xs:w-full 2xs:mx-2">
          <div className="">
            <img
              src={TripPhoto}
              className="rounded-tl-2xl  w-full h-full rounded-tr-2xl"
            />
          </div>
          <div className="mx-5 mt-3 ">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <IconContext.Provider
                  value={{ color: "#FAA935", size: "24px" }}
                >
                  <FaLocationDot />
                </IconContext.Provider>
                <p>{TripPickAndDrop}</p>
              </div>
              <div className="flex items-center gap-2">
                <IconContext.Provider
                  value={{ color: "#FAA935", size: "24px" }}
                >
                  <FaRegClock />
                </IconContext.Provider>
                <p>{TripDuration}</p>
              </div>
            </div>

            <p className="mt-3 text-xl">{TripTittle}</p>
            <p className="mt-3">₹ 0 (Totally Free)</p>

            {/* <div className="flex gap-4 mt-3">
            <BsCalendar3 />
            <p> {Dates}</p>
          </div> */}
            <div className="flex justify-center items-center">
              <button className="border-transparent border-2 bg-[#FAA935] rounded-sm  px-2 py-1 my-2 2xs:px-2 2xs:text-xs">
                View Details
              </button>
              {/* </Link> */}
            </div>
          </div>
          <Toaster />
        </div>
      </Link>
    </>
  );
};

export default TourCard;
