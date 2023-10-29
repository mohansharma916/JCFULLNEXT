import Link from "next/link";
const ViewAll = () => {
  return (
    <>
      <Link href="/trips">
        <button className="border-solid border-2 bg-[#FAA935]  rounded-full px-5 py-3 2xs:px-2 2xs:text-xs">
          View All
        </button>
      </Link>
    </>
  );
};

export default ViewAll;
