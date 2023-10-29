"use client";
import { notFound, useParams } from "next/navigation";

import TripData from "@/src/components/Trips/TripData";
// import Header from "@/app/home/components/Header/Header";
import HeaderImage from "@/src/components/Trips/HeaderImage";
import IconWithDetails from "@/src/components/Trips/IconWithDetails";
import Tripdetails from "@/src/components/Trips/TripDetails";
import Notes from "@/src/components/Trips/Notes";
import PhotosOfTrip from "@/src/components/Trips/PhotosOfTrip";
import Footer from "@/src/components/Footer";
// import Footer from "@/src/components/Trips/Footer";
// import RelatedTrips from "@/src/components/Trips/RelatedTrips";
import HeaderImageContent from "@/src/components/Trips/HeaderImageContent";

const TripPage = () => {
  const { id } = useParams();
  const specificTrip = TripData.find((tr) => tr.id === id);
  // console.log(specificTrip)

  if (!specificTrip) {
    return notFound();
  }

  return (
    <>
      {/* <Header /> */}
      <HeaderImage TripMainImage={specificTrip.TripMainImage} />
      <HeaderImageContent TitleOnImage={specificTrip.TripTittle} />
      <div className="flex">
        <div className="w-3/5 px-4">
          <IconWithDetails
            duration={specificTrip.TripDuration}
            pickUpAndDrop={specificTrip.TripPickAndDrop}
            dates={specificTrip.Dates}
          />
          <Tripdetails
            description={specificTrip.TripDescription}
            itineary={specificTrip.Itineary}
            dates={specificTrip.Dates}
            inclusion={specificTrip.Inclusion}
            exclusion={specificTrip.Exclusion}
          />
          <Notes />
          {/* <RelatedTrips /> */}
        </div>
        <div className="bg-red-200 h-auto w-2/5">hi</div>
      </div>
      <Footer />
      {/* <PhotosOfTrip tripRelatedPhotos={specificTrip.tripPhotos} /> */}
    </>
  );
};

export default TripPage;
