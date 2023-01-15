import { IconType } from "react-icons";

/**======= INTERFACE FOR REDUCER ACTION ======= */
export interface IUserInfoReducerAction {
  type: "SET_USERNAME";
  payload: { [key: string]: string } | string;
}

/** == INTERFACE FOR HINT COMPONENT === */
export interface IHint {
  id: number;
  icon: IconType;
  description: string;
}
