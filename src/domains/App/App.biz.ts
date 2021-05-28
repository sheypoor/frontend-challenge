import { useLocalStorage } from "core/hooks";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useApp = () => {
  const [userInfo, setUserInfo] = useLocalStorage<any>(
    "userInfo",
    JSON.parse(Cookies.get("userInfo") || "{}")
  );

  const setUserInformation = (user: any) => {
    setUserInfo(user);
    Cookies.set("userInfo", JSON.stringify(user), { expires: 365 });
  };

  useEffect(() => {
    setUserInfo(JSON.parse(Cookies.get("userInfo") || "{}"));
  }, []);

  const contextValue: any = {
    setUserInformation,
    userInfo,
  };

  return { contextValue };
};
