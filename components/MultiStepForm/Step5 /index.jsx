import React from "react";

const Step5 = ({ data }) => {
  return (
    <div className="max-w-lg w-full md:max-w-lg mx-auto">
      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h3 className="text-gray-800 text-3xl font-semibold mb-4">
          User Information
        </h3>
        <div className="mb-4">
          <strong>Name:</strong> {data?.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {data?.email}
        </div>
        <div className="mb-4">
          <strong>Date of Birth:</strong> {data?.dob}
        </div>
        <div className="mb-4">
          <strong>Gender:</strong> {data?.gender}
        </div>
        <div className="mb-4">
          <strong>Selected Plan Price:</strong> ₹{data?.price}
        </div>
        {/* Add more data fields as needed */}
      </div>
    </div>
  );
};

export default Step5;
