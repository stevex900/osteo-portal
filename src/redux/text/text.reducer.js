import { ActionTypes } from "./types";
const INITIAL_STATE = {
  index: 0,
  active: false,
  motto: [
    {
      id: 1,
      mottoValue:
        "„Powięź jest miejscem, w którym należy szukać przyczyn chorób, miejscem, które należy poddawać konsultacji i które powinno być przedmiotem oddziaływania terapeutycznego we wszystkich chorobach”  (A. T. Still 1902)",
    },
    {
      id: 2,
      mottoValue:
        "Zdrowie jest stanem pełnego dobrostanu fizycznego, psychicznego i społecznego, a nie tylko brakiem choroby lub niepełnosprawności",
    },
    { id: 3, mottoValue: '"Szukaj zdrowia, nie choroby" (A. T. Still 1902)' },
  ],
};
const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TEXT_CHANGE:
      return { ...state, index: action.payload };
    case ActionTypes.ACTIVE_CHANGE:
      return { ...state, active: action.payload };
    default:
      return state;
    // case ActionTypes.ACTIVE_BUTTON:
    //   return { ...state, active: action.payload };
  }
};
export default textReducer;
