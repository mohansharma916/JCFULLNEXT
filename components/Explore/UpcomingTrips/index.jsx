import TourCard from "../UpcomingTrips/Components/TourCard";
import tourData from "../UpcomingTrips/Components/TourData";
import { useState } from "react";
import ViewAll from "../../ViewAll";

const UpcomingTrips = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  // Maximum number of cards visible at a time
  const cardsPerPage = 3;

  // Calculate the index range for visible cards
  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + cardsPerPage, tourData.length);

  // Function to handle next button click
  const handleNextClick = () => {
    if (endIndex < tourData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="mt-20 relative">
        <h3 className="text-4xl flex justify-center items-center mb-3.5 font-semibold">
          Upcoming Trips
        </h3>
        <p className="flex justify-center  items-center">
          We Curate The Best Experiences For You Based On Your Interests To
          Enjoy Over Weekend Get-aways Around Your City.
        </p>

        <div className="mt-10 flex  flex-wrap justify-center">
          {tourData.map((trip) => (
            <TourCard key={trip.id} tour={trip} />
          ))}
          {/* {startIndex > 0 && (
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-6xl font-light cursor-pointer"
              onClick={handlePrevClick}
            >
              &lt;
            </button>
          )}
          {endIndex < tourData.length && (
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-6xl font-light cursor-pointer"
              onClick={handleNextClick}
            >
              &gt;
            </button>
          )} */}
        </div>
      </div>
      <div className="grid place-items-center">
        <ViewAll />
      </div>
    </>
  );
};

export default UpcomingTrips;
