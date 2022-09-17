import React from "react";
import { InitialStateType } from "../utils/userInfoReducer";

/**======= INTERFACE FOR REDUCER ACTION ======= */
export interface IUserInfoReducerAction {
  type: "SET_USERNAME";
  payload: { [key: string]: string } | string;
}
