const ServiceCard = ({ MainInfo, DetailedInfo, Icon }) => {
  return (
    <>
      <div className=" border-t border-r-2 border-b-4 rounded border-rose-200 mr-4 px-4 2xs:p-0 2xs:mr-0  md:border-blue-200">
        <div className="2xs:flex">
          {Icon && <Icon className="w-8 h-8 mr-2 text-[#ee6e6e] pt-2 " />}
          <h3 className="font-semibold my-2 2xs:text-[10px]">{MainInfo}</h3>
        </div>
        <p className="2xs:text-[8px] 2xs:px-2">{DetailedInfo}</p>
      </div>
    </>
  );
};

export default ServiceCard;
