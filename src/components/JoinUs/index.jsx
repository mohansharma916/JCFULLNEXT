import JoinUsSteps from "./JoinUsSteps";
import ServiceCard from "./JoinUsSteps";

const JoinUs = () => {
  const JoinUsData = [
    {
      id: 1,
      MainInfo: "Become A Member",
      icon: "/media/member.svg",
      DetailedInfo:
        "Sign up and become a part of our vibrant travel community. It's easy . Register to access a world of exciting journeys.",
    },
    {
      id: 2,
      MainInfo: "Complete Your Profile",
      icon: "/media/profile.svg",
      DetailedInfo:
        "Tell us more about yourself. Fill in your profile details so we can personalize your travel experience.",
    },
    {
      id: 3,
      MainInfo: "Choose Your Location & Dates",
      icon: "/media/location.svg",
      DetailedInfo:
        "Browse our list of fantastic destinations and select your preferred dates. We offer flexibility to match your schedule.",
    },
    {
      id: 4,
      MainInfo: "Now Get Ready to Travel",
      icon: "/media/travel.svg",
      DetailedInfo:
        "Pack your bags and get ready for a memorable adventure. We'll handle the rest, capturing your journey from start to finish. Enjoy your trip!",
    },
  ];

  return (
    <>
      <div className="flex 2xs:flex 2xs:flex-col  ">
        <div className="w-3/12 text-3xl font-medium 2xs:w-full 2xs:text-center 2xs:place-item-center">
          <h2 className="font-cursive inline-block text-[#ee6e6e] 2xs:text-4xl 2xs">
            How It Works
          </h2>
          <p>Join Us In 4 Steps</p>
        </div>
        <div className="flex w-9/12  sm:flex-none 2xs:flex-none 2xs:w-full 2xs:mt-4">
          {JoinUsData.map((data) => (
            <JoinUsSteps
              Steps={data.id}
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

export default JoinUs;
