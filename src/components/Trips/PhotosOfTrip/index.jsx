"use client";
import { useState } from "react";
import PhotoCard from "./PhotoCard";
const PhotosOfTrip = ({ tripRelatedPhotos }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  // Maximum number of cards visible at a time
  const cardsPerPage = 3;

  // Calculate the index range for visible cards
  const startIndex = currentIndex;
  const endIndex = startIndex + cardsPerPage;

  // Function to handle next button click
  const handleNextClick = () => {
    if (endIndex < tripRelatedPhotos.length) {
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
      {tripRelatedPhotos.map((ss) => {
        <PhotoCard data={ss} />;
      })}

      {/* {startIndex > 0 && (
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-6xl font-light cursor-pointer"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
      )} */}
      {/* {endIndex < tripRelatedPhotos.length && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-6xl font-light cursor-pointer"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      )} */}
    </>
  );
};

export default PhotosOfTrip;
