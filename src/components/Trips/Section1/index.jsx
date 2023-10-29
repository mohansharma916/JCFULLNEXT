// import HomePagePhoto from   "/images/HomePagePhoto.jpg"

const Section1 = () => {
  return (
    <>
      {/* <img
        src="/media/HomePage.jpg"
        className="w-full h-1/2 top-0 stickey"
        alt="MountainHomePagePhoto"
      /> */}
      <video className="rounded-lg " playsInline={true} autoPlay loop muted>
        <source src="/media/DomesticTrips.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Section1;
