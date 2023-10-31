import Subtitle from "../subtitle";
import Link from "next/link";
import { useAppSelector } from "@/src/hooks";
const HeroSection = () => {
  const user = useAppSelector((state) => state.user.data);

  return (
    <>
      <div className="flex 2xs:flex-col">
        <div className="w-2/5 2xs:w-full  ">
          <div className="flex items-center gap-5 2xs:w-full">
            <Subtitle subtitle={"Travel For Free Around the World"} />
            <img
              width="64"
              alt="Rotating earth animated transparent"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
            />
          </div>
          <h1 className="text-4xl my-4 font-bold">
            Travel the World for Free and Capture Your Journey's Best Moments
          </h1>
          <p className="text-gray-400">
            Are you an adventurous soul with a passion for travel and
            storytelling? Join The Journey Capturer community and embark on
            unforgettable trips, all at no cost.
          </p>
          {!user && (
            <div className="2xs:text-center ">
              <Link href="/auth/register">
                <button className="mt-12 bg-[#FAA935] p-3 rounded-3xl 2xs:mb-2 2xs:mt-4">
                  Become a Member →
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="w-3/5 2xs:w-full">
          <div className="p-16 flex gap-5 2xs:p-0 2xs:flex 2xs:flex-col  2xs:p-2 2xs:gap-0">
            {/* <div>
              <video
                width="177"
                height="100"
                className="rounded-lg 2xs:hidden"
                playsInline
                autoPlay
                loop
                muted
              >
                <source src="/media/travelVideo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
            <img width={400} src="/media/pngwing.png" />
            <div>
              <video
                width="300"
                className="rounded-lg 2xs:hidden"
                playsInline={true}
                autoPlay
                loop
                muted
              >
                <source src="/media/mainVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
