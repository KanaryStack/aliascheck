import { ChangeEvent } from "react";
import { IUserInfoReducerAction } from "../interfaces";

/** ======== DefaultState =========== */
export const initialState = {
  username: "",
  fname: "",
  lname: "",
  suggestions: [""],
  data: [""],
  setUsername: (username: string) => {},
};

/**
 * 
 * @param {
      username: string;
      fname: string;
      lname: string;
      suggestion: string[];
      data: string[];
    } state 
 * @param {
        type: "SEARCH_USERNAME";
        payload: { [key: string]: string } | string;
      } action 
 * @returns state
 */

/**
 * =========== USER_INFO_REDUCER =============
 *
 * Handles all state updates and manipulation based on dispatched
 * action(s)
 *
 * All LOGIC that does not involve state manipulation should
 * live in the [UserInfoContext] space
 *
 * A unique ACTION for each dispatch should be set up in the
 * reducer fuction.
 *
 * ======== HOW TO ADD NEW ACTION_TYPE ===============
 * [1] Decide on a name for the action [type = string]
 * [2] include 'decided name to the interface for {IUserInfoReducerAction}
 * in '../intefaces'
 * [3] In the switch block, create a CASE to handle your "Decided action type"
 *
 * HINT:
 *     Provide a break; statement if your ACTION_TYPE does not use the return key,
 *     This will prevent the switch case from malfunctioning.
 *
 *
 */

const userInfoReducer = (
  state: InitialStateType,
  action: IUserInfoReducerAction
): InitialStateType => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USERNAME":
      return { ...state, username: payload as string };
    default:
      throw new Error(`No case for typ ${type} found in userInfoReduser`);
  }
};

export type InitialStateType = typeof initialState;
export default userInfoReducer;
