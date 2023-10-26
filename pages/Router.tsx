// import { GET_AGENCY_CODE, GetUser } from "@/apollo/queries/auth";
// import {
//   GET_NUMBERS,
//   GET_PROJECT_AMOUNTS,
//   GET_RLI,
// } from "@/apollo/queries/updateUser";
// import { useAppDispatch } from "@/hooks";
// import {
//   setNumbers,
//   setTotalAgraAmount,
//   setTotalHajipurAmount,
// } from "@/state/slice/allUsersSlice";
// import { setAgencyCode, setOrUpdateUser } from "@/state/slice/userSlice";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Router = ({ children }) => {
  const router = useRouter();
  //   const userResp = useQuery(GetUser);
  //   const RamaLegalIT = useQuery(GET_RLI);
  //   const allNumbers = useQuery(GET_NUMBERS);
  //   const allProjectAmounts = useQuery(GET_PROJECT_AMOUNTS);
  //   const agencyCode = useQuery(GET_AGENCY_CODE, {
  //     variables: { userID: userResp?.data?.me.id },
  //   });

  //   const dispatch = useAppDispatch();
  //   if (allProjectAmounts?.data?.getProjectsPayment) {
  //     dispatch(
  //       setTotalHajipurAmount(
  //         allProjectAmounts?.data?.getProjectsPayment.ProjectHajipurAmountReceived
  //       )
  //     );
  //     dispatch(
  //       setTotalAgraAmount(
  //         allProjectAmounts?.data?.getProjectsPayment.ProjectAgraAmountReceived
  //       )
  //     );
  //   }
  //   if (allNumbers?.data?.getAllUsersCount) {
  //     dispatch(setNumbers(allNumbers?.data?.getAllUsersCount));
  //   }
  //   if (agencyCode?.data?.kycAgency.agencyCode) {
  //     dispatch(setAgencyCode(agencyCode.data.kycAgency.agencyCode));
  //   }

  const [isLoading, setLoading] = useState(true);
  /*  const gotData = useSelector((state: any) => state.allUsers.gotData);
  useEffect(() => {
    if (!gotData) {
      router.replace('/dashboard');
    }
  }, []); */
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [isAuthFinished, setAuthFinished] = useState(false);

  const loadUser = async () => {
    try {
      //   const resp = await userResp.refetch();
      // console.log('resp', resp);
      //   return resp.data.me;
    } catch (err) {
      //   if (userResp.error && userResp.error.graphQLErrors) {
      //     for (let error of userResp.error.graphQLErrors) {
      //       if (error.extensions.code === "UNAUTHENTICATED") {
      //         localStorage.clear();
      //       }
      //     }
      //   }
    }
    return null;
  };
  const validatedAuth = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
    }
    const user = await loadUser();
    // if (user) {
    //   setAuthenticated(true);

    //   dispatch(setOrUpdateUser(user));
    // }
    setLoading(false);
  };

  useEffect(() => {
    validatedAuth();
  }, []);

  const handleRoutes = async () => {
    if (
      !isAuthenticated &&
      router.pathname.toLowerCase() !== "/auth/login".toLowerCase() &&
      router.pathname.toLowerCase() !== "/auth/signup".toLowerCase()
    ) {
      await router.replace("/auth/login");
    } else if (
      isAuthenticated &&
      (router.pathname.toLowerCase() == "/auth/login".toLowerCase() ||
        router.pathname.toLowerCase() == "/auth/signup".toLowerCase())
    ) {
      await router.replace("/dashboard");
    }
    setAuthFinished(true);
  };

  useEffect(() => {
    if (!isLoading) {
      handleRoutes();
    }
  }, [isLoading, isAuthenticated]);

  return <>{!isLoading && isAuthFinished ? children : null}</>;
};

export default Router;
