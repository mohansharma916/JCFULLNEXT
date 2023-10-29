import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetUser } from "../apollo/queries/auth";

function IsAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    // make a api call to check if user is authenticated
    const { data, loading, error } = useQuery(GetUser);
    const router = useRouter();

    console.log("--->>>>>", data);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error || !data) {
      console.log("here", error);
      router.push("/");
    }

    return (
      <>
        <Component {...props!} />
      </>
    );
  };
}

export default IsAuth;
