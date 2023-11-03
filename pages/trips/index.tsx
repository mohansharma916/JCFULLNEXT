import Section1 from "@/src/components/Trips/Section1";
// import UpcomingTrips from "../home/components/UpcomingTrips";
import AllTrips from "@/src/components/Trips/AllTrips";
import HeaderImageContent from "@/src/components/Trips/HeaderImageContent";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { Toaster } from "react-hot-toast";

export const TripCategories = [
  // {
  //   tag: "Beaches",
  //   tagDescription:
  //     "Sun, sand, and sea lovers, our beach trips are designed for you. Whether it's a relaxing beach vacation or water sports and beach parties, we offer various options to soak up the beach vibes.",
  // },
  {
    tag: "Winter",
    tagDescription:
      "If you crave the chill of snowy adventures, our snow mountain trips are perfect. Experience the magic of snow-covered peaks, winter sports, and cozy getaways in the heart of snowscapes.",
  },
  {
    tag: "Trekking",
    tagDescription:
      "For the adventure enthusiasts, our trekking trips will take you through breathtaking mountain landscapes and challenging terrains. Get ready to explore nature at its best and embark on thrilling journeys.",
  },
  {
    tag: "Party",
    tagDescription:
      "If you're looking for vibrant nightlife, entertainment, and party scenes, our party travelers' category is your go-to choice. Join us for unforgettable nights and vibrant atmospheres.",
  },
  {
    tag: "Temples",
    tagDescription:
      "If you're looking for vibrant nightlife, entertainment, and party scenes, our party travelers' category is your go-to choice. Join us for unforgettable nights and vibrant atmospheres.",
  },
];

const Trips = () => {
  return (
    <>
      <Header />

      <Section1 />
      <HeaderImageContent TitleOnImage={"Domestic Trips"} />
      <div className="flex justify-center mt-20 text-6xl font-bold">
        <p>Domestic Trips</p>
      </div>
      {TripCategories.map((categorie) => (
        <AllTrips tags={categorie.tag} description={categorie.tagDescription} />
      ))}
      <Footer />
      <Toaster />
    </>
  );
};

export default Trips;
