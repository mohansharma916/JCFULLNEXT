const ServiceCard = ({ MainInfo, DetailedInfo, Icon }) => {
  return (
    <>
      <div className=" border-t border-r-2 border-b-4 rounded border-rose-200 mr-4 px-4 max-w-sm">
        {Icon && <Icon className="w-8 h-8 mr-2 text-[#ee6e6e] pt-2 " />}
        <h3 className="font-semibold my-2">{MainInfo}</h3>
        <p>{DetailedInfo}</p>
      </div>
    </>
  );
};

export default ServiceCard;
