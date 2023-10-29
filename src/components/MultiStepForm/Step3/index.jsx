import { React, useState, useEffect } from "react";
import Step2 from "../Step2";
const Step3 = (props) => {
  const { data, setData } = props;

  const [fullAddress, setFullAddress] = useState({
    house: "",
    locality: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFullAddress({
      ...fullAddress,
      [name]: value,
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in fullAddress) {
        if (fullAddress[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false; // All properties have values
    };
    if (!isDataEmpty()) {
      setData({
        ...data,
        address: fullAddress,
      });
    }
  }, [fullAddress]);

  return (
    <>
      <Step2 />
    </>
  );
};

export default Step3;
