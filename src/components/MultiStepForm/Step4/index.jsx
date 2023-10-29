import React, { useState } from "react";
import axios from "axios"; // You need to install axios if you haven't already: npm install axios

const Step4 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [paymentProof, setPaymentProof] = useState();

  const handleFileChange = (event) => {
    console.log("hande", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setPaymentProof(URL.createObjectURL(event.target.files[0]));
  };

  // console.log("paymentProof", paymentProof);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      c;
      setImageUrl(response.data.imageUrl);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <div>
      <p className="pb-8"> Please Upload the Payment Proof </p>
      <div className="border-2  px-5  flex justify-between">
        <div className="py-20">
          <input
            type="file"
            onChange={(event) => {
              // console.log("clicked");
              setSelectedFile(event.target.files[0]);
              setPaymentProof(URL.createObjectURL(event.target.files[0]));
              // handleFileChange();
            }}
          />

          <button onClick={handleUpload}>Upload</button>
        </div>
        <div>
          {paymentProof && (
            <div>
              <h2>Uploaded Image:</h2>
              <img
                src={paymentProof}
                alt="Uploaded"
                className="w-40 h-40 justify-evenly gap-30"
                // style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
      {/* <p className="pb-8"> Please Upload Your Profil </p>
      <div className="border-2  px-5  flex justify-between">
        <div className="py-20">
          <input
            type="file"
            onChange={(event) => {
              // console.log("clicked");
              setSelectedFile(event.target.files[0]);
              setPaymentProof(URL.createObjectURL(event.target.files[0]));
              // handleFileChange();
            }}
          />

          <button onClick={handleUpload}>Upload</button>
        </div>
        <div>
          {paymentProof && (
            <div>
              <h2>Uploaded Image:</h2>
              <img
                src={paymentProof}
                alt="Uploaded"
                className="w-40 h-40 justify-evenly gap-30"
                // style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      </div> */}
      {/* {console.log(paymentProof)} */}
    </div>
  );
};

export default Step4;
