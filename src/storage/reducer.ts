export type TState = {
  statusOkPrescoring: boolean;
  statusOkOffers: boolean;
};

type Action = { type: "PRESCORING" } | { type: "OFFERS" } | { type: "CLEAR" };

const initialState: TState = {
  statusOkPrescoring: false,
  statusOkOffers: false,
};

const reducer = (state: TState = initialState, action: Action) => {
  switch (action.type) {
    case "PRESCORING":
      return { ...state, statusOkPrescoring: true };
    case "OFFERS":
      return { ...state, statusOkOffers: true };
    case "CLEAR":
      return { ...state, statusOkPrescoring: false, statusOkOffers: false };
    default:
      return state;
  }
};

export default reducer;
