import TourCard from "./Components/TourCard";
import tourData from "./Components/TourData";
import { useState } from "react";
import ViewAll from "../../ViewAll";
import { TripCategories } from "@/pages/trips";
import Subtitle from "../../subtitle";

const UpcomingTrips = () => {
  return (
    <>
      <div className="mt-20 relative 2xs:mt-5">
        <div>
          <h3 className="text-4xl flex justify-center items-center mb-3.5 font-semibold">
            Upcoming Trips
          </h3>
          <p className="flex justify-center mb-5 items-center 2xs:text-center">
            We Curate The Best Experiences For You Based On Your Interests To
            Enjoy Over Weekend Get-aways Around Your City.
          </p>
          <div className="flex justify-center gap-5 2xs:flex 2xs:inline-block">
            {TripCategories.map((categories) => (
              <Subtitle subtitle={categories.tag} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex 2xs:mt-8 flex-wrap justify-center">
          {tourData.map((trip) => (
            <TourCard key={trip.id} tour={trip} />
          ))}
        </div>
      </div>
      <div className="grid place-items-center ">
        <ViewAll />
      </div>
    </>
  );
};

export default UpcomingTrips;
