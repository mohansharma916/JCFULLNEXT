const HeaderImage = ({ TripMainImage }) => {
  return (
    <>
      <div>
        <video
          // width="200"
          // className="rounded-lg mt-10 2xs:hidden"
          playsInline={true}
          autoPlay
          loop
          muted
        >
          <source src="/media/DomesticTrips.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img
          src={TripMainImage}
          className="w-screen h-[32rem] top-0 stickey"
          alt="MountainHomePagePhoto"
        /> */}
      </div>
    </>
  );
};

export default HeaderImage;
