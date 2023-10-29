const Subtitle = ({ subtitle }) => {
  return (
    <>
      <div>
        <h3 className="font-cursive bg-[#FAA935] text-3xl 2xs:text-sm  inline-block px-3 py-2 2xs:py-py rounded-full">
          {subtitle}
        </h3>
      </div>
    </>
  );
};

export default Subtitle;
