import React, { createContext, FC, useContext } from "react";

interface IAppProviderProps {
  children: any;
  value: any;
}

const AppContext = createContext({
  setUserInformation: (values: any) => {},
  userInfo: {} as any,
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<IAppProviderProps> = ({ ...props }) => (
  <AppContext.Provider {...{ ...props }} />
);
