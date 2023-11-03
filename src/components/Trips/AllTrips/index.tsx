"use client";
import TourCard from "@/src/components/Explore/UpcomingTrips/Components/TourCard";
import tourData from "@/src/components/Explore/UpcomingTrips/Components/TourData";
import { useState } from "react";
import Subtitle from "../../subtitle";
import toast, { Toaster } from "react-hot-toast";
const AllTrips = ({ tags, description }) => {
  return (
    <>
      <div className="mx-20 mt-20 relative">
        <div className="flex justify-between gap-5">
          <Subtitle subtitle={tags} />
          <p>{description}</p>
        </div>

        <div className="mt-10 flex  flex-wrap justify-center">
          {tourData.map((trip) => (
            <TourCard key={trip.id} tour={trip} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTrips;
