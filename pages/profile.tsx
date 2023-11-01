import Header from "@/src/components/Header";
import {
  UserCircleIcon,
  HomeIcon,
  BanknotesIcon,
  ArrowLeftOnRectangleIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import IsAuth from "@/src/components/IsAuth";
import { useState } from "react";

const Profile = () => {
  const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null);
  const [selectedAadharFrontPhoto, setSelectedAadharFrontPhoto] =
    useState(null);
  const [selectedAadharBackPhoto, setSelectedAadharBackPhoto] = useState(null);
  const [selectedPaymentSlip, setSelectedPaymentSlip] = useState(null);

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedProfilePhoto(imageUrl);
    }
  };
  const handleAadharFrontPhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedAadharFrontPhoto(imageUrl);
    }
  };
  const handleAadharbackPhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedAadharBackPhoto(imageUrl);
    }
  };
  const handlePaymentSlipChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedPaymentSlip(imageUrl);
    }
  };

  const products = [
    {
      name: "HomePage",
      href: "/",
      icon: (
        <HomeIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
      ),
    },
    {
      name: "Trips",
      href: "/trips",
      icon: (
        <GlobeAsiaAustraliaIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
      ),
    },
    {
      name: "My Earning",
      href: "/earning",
      icon: (
        <BanknotesIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
      ),
    },
    {
      name: "Logout",
      href: "#",
      icon: (
        <ArrowLeftOnRectangleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="p-9 flex">
        <div className="w-1/4">
          <div className="p-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  {item.icon}
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="w-full h-60 bg-white rounded-md flex justify-between">
            <div className="w-full flex m-4">
              <div className=" w-60 h-full  ">
                <div className=" h-4/5  w-4/5 items-center flex justify-center bg-gray-500">
                  {selectedProfilePhoto ? (
                    <div className="image-preview">
                      <img
                        src={selectedProfilePhoto}
                        className="h-32 w-32"
                        alt="Uploaded"
                      />
                    </div>
                  ) : (
                    <UserCircleIcon className="h-28 w-28" aria-hidden="true" />
                  )}
                </div>
                <div className="flex w-4/5 bg-[#FAA935] text-white justify-center mt-5 border-2 rounded-md">
                  <label className="h-22" htmlFor="profile_uploads">
                    Update Profile Photo
                  </label>
                  <input
                    id="profile_uploads"
                    type="file"
                    name="profile_uploads"
                    className="hidden"
                    onChange={handleProfilePhotoChange}
                  />
                </div>
              </div>
              <div className="px-12 py-5">
                <p className="mt-4">Name:</p>
                <p className="mt-4">Email Id:</p>
                <p className="mt-4">Mobile Number:</p>
                <p className="mt-4">Address:</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="bg-white w-3/5 h-60 rounded-md px-6 py-2">
              <h2 className="text-xl underline-offset-4">Documents</h2>
              <div className="flex flex-col">
                <div className="gap-5 flex my-2 ">
                  <div className="flex">
                    <p>Aadhar Front Side</p>
                    <div className="bg-[#FAA935] text-center w-40 text-white justify-center border-2 rounded-md">
                      <label className="h-22" htmlFor="aadhar_front">
                        Update Front Side
                      </label>
                      <input
                        id="aadhar_front"
                        type="file"
                        name="aadhar_front"
                        className="hidden"
                        onChange={handleAadharFrontPhotoChange}
                      />
                    </div>
                    {selectedAadharFrontPhoto && (
                      <div className="image-preview">
                        <img
                          src={selectedAadharFrontPhoto}
                          className="h-32 w-32"
                          alt="Uploaded"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="gap-5 flex my-2">
                  <p>Aadhar Back Side</p>
                  <div className="bg-[#FAA935]  text-center w-52 text-white justify-center border-2 rounded-md">
                    <label className="h-22" htmlFor="aadhar_back">
                      Upload Aadhar Back Side
                    </label>
                    <input
                      id="aadhar_back"
                      type="file"
                      name="aadhar_back"
                      className="hidden"
                      onChange={handleAadharbackPhotoChange}
                    />
                  </div>
                  {selectedAadharBackPhoto && (
                    <div className="image-preview">
                      <img
                        src={selectedAadharBackPhoto}
                        className="h-32 w-32"
                        alt="Uploaded"
                      />
                    </div>
                  )}

                  {/* <p className="p-1 bg-[#FAA935] text-center">Upload</p> */}
                </div>
                <div className="gap-5 flex my-2">
                  <p>Payment Slip</p>
                  <div className="bg-[#FAA935] text-center w-52 text-white justify-center border-2 rounded-md">
                    <label className="h-22" htmlFor="payment_uploads">
                      Update Payment Slip
                    </label>
                    <input
                      id="payment_uploads"
                      type="file"
                      name="payment_uploads"
                      className="hidden"
                      onChange={handlePaymentSlipChange}
                    />
                  </div>
                  {selectedPaymentSlip && (
                    <div className="image-preview">
                      <img
                        src={selectedPaymentSlip}
                        className="h-32 w-32"
                        alt="Uploaded"
                      />
                    </div>
                  )}

                  {/* <p className="p-1 bg-[#FAA935] text-center">Upload</p> */}
                </div>
              </div>
            </div>
            <div className="bg-white w-2/5 h-60 rounded-md justify-center ml-10">
              Upcoming Trips
            </div>
          </div>
          <div className="bg-white px-6 py-2 mt-10 h-64 w-full">
            <p>Your Trips</p>
            <p className="text-3xl"> There is No Trip</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
