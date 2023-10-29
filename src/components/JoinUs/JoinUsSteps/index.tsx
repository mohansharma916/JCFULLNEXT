const JoinUsSteps = ({ MainInfo, DetailedInfo, Icon, Steps }) => {
  return (
    <>
      <div className=" border-t border-r-2 border-b-4 rounded border-rose-200 mr-4 px-4 2xs:p-0 2xs:mr-0  md:border-blue-200">
        <div className="2xs:flex-col items-center ">
          {/* {Icon && <Icon className="w-8 h-8 mr-2 text-[#ee6e6e] pt-2 " />} */}
          <div className=" flex gap:2 gap-3">
            <img src={Icon} className="text-[#ee6e6e] 2xs:w-8" />
            <p className="text-xl 2xs:text-xs "> Step {Steps}</p>
          </div>
          <h3 className="font-semibold my-2 2xs:text-[10px]">{MainInfo}</h3>
        </div>
        <p className="2xs:text-[8px] 2xs:px-2">{DetailedInfo}</p>
      </div>
    </>
  );
};

export default JoinUsSteps;
