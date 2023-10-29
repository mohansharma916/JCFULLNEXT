import ServiceCard from "./ServiceCard";
import {
  BanknotesIcon,
  VideoCameraIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
const Services = () => {
  const ServiceData = [
    {
      id: 1,
      MainInfo: "Sponser Your Trip",
      icon: BanknotesIcon,
      DetailedInfo:
        "Get financial support for your travels. We want to remove the financial barriers that prevent you from exploring the world. With our assistance, curate your dream experiences and select accommodations that match your preferences.",
    },
    {
      id: 2,
      MainInfo: "Record Your Journey",
      icon: VideoCameraIcon,
      DetailedInfo:
        "Capture your adventures and share them with the world. We believe in the power of visual storytelling. Document the stunning landscapes, vibrant cultures, and intimate moments that make each trip unique..",
    },
    {
      id: 3,
      MainInfo: "Customize The Trip",
      icon: WrenchScrewdriverIcon,
      DetailedInfo:
        "Your voice matters. We welcome your input and suggestions for trip destinations. Help us create the perfect journeys that align with your preferences.",
    },
  ];

  return (
    <>
      <div className="flex 2xs:flex 2xs:flex-col  ">
        <div className="w-3/12 text-3xl font-medium 2xs:w-full 2xs:text-center 2xs:place-item-center">
          <h2 className="font-cursive inline-block text-[#ee6e6e] 2xs:text-4xl 2xs">
            What We Serve
          </h2>
          <p>We offer our best services</p>
        </div>
        <div className="flex w-9/12 2xs:flex 2xs:gap-2 sx:flex 2xs:w-full 2xs:mt-4">
          {ServiceData.map((data) => (
            <ServiceCard
              key={data.id}
              MainInfo={data.MainInfo}
              DetailedInfo={data.DetailedInfo}
              Icon={data.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
