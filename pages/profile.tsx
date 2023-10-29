import IsAuth from "@/src/components/IsAuth";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <>
      <p>Hello From Profile Protected</p>
    </>
  );
};

export default IsAuth(Profile);
