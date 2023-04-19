import { Coffe } from "./reducer";

export enum ActionTypes {
  ADD_COFFE = "ADD_COFFE",
  REMOVE_COFFE = "REMOVE_COFFE",
}

export function addCoffeAction(coffe: Coffe) {
  return {
    type: ActionTypes.ADD_COFFE,
    payload: {
      coffe,
    },
  };
}

export function removeCoffeAction(coffe: Coffe) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: {
      coffe,
    },
  };
}
