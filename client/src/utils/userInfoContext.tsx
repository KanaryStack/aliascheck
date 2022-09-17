import React, { useReducer, createContext, useContext } from "react";
import userInfoReducer, { initialState } from "./userInfoReducer";

const UserStateContext = createContext(initialState);

/**
 *
 * @param {React.ReactNode} children
 * @returns JSX.Element
 */

/**
 * =========== USER_INFO_PROVIDER =============
 *
 * The logic that surrounds fetching data from the server and
 * managing state informatin for the user cycle is house by the
 * UserInfoProvider
 *
 * All LOGIC should live in this space
 *
 * A unique ACTION for each dispatch should be set up in the
 * reducer fuction.
 *
 * For every ACION_TYPE that is created, ensure to include it to the
 * [IUserInfoReducerAction] in '../intefaces'
 *
 * =========== How To Add Logic ================
 *  [1] setup a function for your logic of choice
 * [2] include function to initialState in './userInfoReducer'
 * [3] include function to the value attribute of the
 * <UserStateContext.Provider> -: This is to make it aaccebile by
 * the context hook.
 */

export const UserInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  //ADD YOU LOGIC HERE (see description for how to add logic)
  const setUsername = (username: string) => {
    dispatch({
      type: "SET_USERNAME",
      payload: username,
    });
  };
  return (
    <UserStateContext.Provider value={{ ...initialState, setUsername }}>
      {children}
    </UserStateContext.Provider>
  );
};

/**
 * 
 * @returns {
    username: string;
    fname: string;
    lname: string;
    suggestion: string[];
    data: string[];
* }
* More return values will be provided according to use cases
 */

/**
 * To prevent import useContext hook in all areas where UserInfo would be needed
 * this context is created to expose the information available for the user
 *
 * import [useUserInfo] and expect the necessary user data
 */

export const useUserInfo = () => {
  const context = useContext(UserStateContext);

  if (!context)
    throw new Error(`useUserInfo must be used inside UserInfoProvider`);

  return context;
};
