const HeaderImageContent = ({ TitleOnImage }) => {
  const existingText = "Connecting Travellers Since 2016";
  const lines = [
    "Line 1: This is the first line.",
    "Line 2: This is the second line.",
    "Line 3: This is the third line.",
  ];

  return (
    <>
      {/* <img src="/images/HomePagePhoto.jpg" className="w-screen h-screen top-0 sticky" alt="MountainHomePagePhoto" /> */}
      <div className="text-white absolute top-1/2  mx-20 transform -translate-y-1/2">
        <h3 className=" text-6xl mb-9  font-semibold">{TitleOnImage}</h3>
      </div>

      <div className="absolute bottom-9"></div>
    </>
  );
};

export default HeaderImageContent;
