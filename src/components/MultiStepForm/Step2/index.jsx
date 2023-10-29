import React, { useEffect } from "react";
const Step2 = (props) => {
  const { data, handleChange } = props;
  const plans = [
    {
      name: "Domestic Trips Plan",
      price: "₹999",
      // features: ["Curabitur faucibus", "massa ut pretium maximus"],
    },
    {
      name: "International Trips Plan (Coming Soon)",
      price: "Coming Soon ",
      // features: ["Curabitur faucibus", "massa ut pretium maximus"],
    },
  ];

  const handlePlanClick = (price) => {
    // Handle the selected plan logic here
    console.log("price", price);
    setSelectedPlan(price);
    // Call your handleChange function with the selected price
    handleChange(price);
  };

  // useEffect(() => {
  //   handleChange(999);
  // }, []);

  const [selectedPlan, setSelectedPlan] = React.useState("₹999");

  return (
    <div className="max-w-lg w-full md:max-w-lg mx-auto">
      <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4">
        <div className="max-w-screen-xl mx-auto  text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <p className="text-gray-800 text-xl font-semibold sm:text-xl">
              Membership Fee (One Time Only - Lifetime Access)
            </p>
            <div className="mt-3 max-w-xl">
              <form className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4">
                <div>
                  <div className="flex items-center ">
                    <p>
                      Pay Via UPI App <sup>*</sup> : (click Here → )
                    </p>
                    <div className="flex border-inherit gap-2 ml-6">
                      <a href="upi://pay?pa=mohansharma916@okhdfcbank&cu=INR&am=999">
                        <img
                          className=""
                          src="/media/google-pay.svg"
                          width={40}
                          height={40}
                          alt="google-pay-Icon"
                        />
                      </a>
                      <a href="upi://pay?pa=mohansharma916@okhdfcbank&cu=INR&am=99">
                        <img
                          className=""
                          src="/media/phone-pay.png"
                          width={40}
                          height={40}
                          alt="phone-pay-Icon"
                        />
                      </a>
                    </div>
                  </div>
                  <p className=" text-slate-400 text-[8px]">
                    {" "}
                    <sup>*</sup>
                    To Avoid Transaction Fee Of Payment Platform We are directly
                    Receiving Payment Throygh UPI{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-16 space-y-6 justify-center gap-6 grid grid-cols-2 sm:space-y-0 ">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-1 flex  flex-col p-4 rounded-xl border-2 ${
                  selectedPlan === item.price
                    ? "border-indigo-600"
                    : "border-gray-300"
                }`}
                name="price"
                // onClick={() => handlePlanClick(item.price)}
              >
                <div>
                  <span className="text-indigo-600 font-medium">
                    {item.name}
                  </span>
                  <div className="mt-4 text-gray-800 mb-4 item-center text-3xl font-semibold">
                    {item.price}{" "}
                    <span className="text-xl text-gray-600 font-normal"></span>
                  </div>
                </div>
                {/* <ul className="py-8 space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul> */}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
