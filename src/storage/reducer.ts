export type TState = {
  statusOkPrescoring: boolean;
  statusOkOffers: boolean;
};

type Action = { type: "PRESCORING" } | { type: "OFFERS" };

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
    default:
      return state;
  }
};

export default reducer;
