// Step1.js
import React from "react";
import * as Yup from "yup";

const Step1 = (props) => {
  const { data, handleChange } = props;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.number().required("Mobile Number is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("DOB is required"),
  });

  return (
    <div className="max-w-xs md:max-w-lg mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="name"
            type="text"
            placeholder="Name..."
            required
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="email"
            type="email"
            required
            placeholder="Email..."
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number"
          >
            Mobile Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="mobileNumber"
            type="number"
            required
            placeholder="Mobile Number..."
            value={data.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="inline-block relative w-64 mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="gender"
            value={data.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            DOB
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="dob"
            type="date"
            required
            value={data.dob}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
