import produce from "immer";
import { ActionTypes } from "./actions";

interface CoffeState {
  coffeInCart: Coffe[];
}

// image={tradicional_express}
// options={["TRADICIONAL"]}
// title="Expresso Tradicional"
// description="O tradicional café feito com água quente e grãos moídos"
// price="9,90"

export interface Coffe {
  id: number;
  image: string;
  options: string[];
  title: string;
  description: string;
  price: string;
}

export function coffeReducer(state: CoffeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE:
    case ActionTypes.REMOVE_COFFE:
    default:
      return state;
  }
}
