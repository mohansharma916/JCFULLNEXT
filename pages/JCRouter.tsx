import { setOrUpdateUser } from "@/src/state/slice/userSlice";
import { GetUser } from "../src/apollo/queries/auth";
import { useAppDispatch } from "../src/hooks";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JCRouter = ({ children }) => {
  const router = useRouter();
  const userResp = useQuery(GetUser);

  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = useState(true);
  const gotData = useSelector((state: any) => state.userResp);
  useEffect(() => {
    if (!gotData) {
      router.replace("/");
    }
  }, []);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [isAuthFinished, setAuthFinished] = useState(false);

  const loadUser = async () => {
    try {
      const resp = await userResp.refetch();
      // console.log("resp", resp);
      return resp.data.me;
    } catch (err) {
      if (userResp.error && userResp.error.graphQLErrors) {
        for (let error of userResp.error.graphQLErrors) {
          if (error.extensions.code === "UNAUTHENTICATED") {
            localStorage.clear();
          }
        }
      }
    }
    return null;
  };
  const validatedAuth = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
    }
    const user = await loadUser();
    if (user) {
      setAuthenticated(true);

      dispatch(setOrUpdateUser(user));
    }
    setLoading(false);
  };

  useEffect(() => {
    validatedAuth();
  }, []);

  const handleRoutes = async () => {
    const isLoginPage = ["/auth/login", "/auth/register"].includes(
      router.pathname.toLowerCase()
    );
    console.log("isauthenticated", isAuthenticated, isLoginPage);
    if (
      // (!isAuthenticated && !isLoginPage) ||
      isAuthenticated &&
      isLoginPage
    ) {
      // console.log("isauthenticated", isAuthenticated, isLoginPage);
      await router.replace("/");
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

export default JCRouter;
