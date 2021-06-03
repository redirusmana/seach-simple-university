import { FETCH_INDEX, FETCH_SEARCH } from "../Actions/Types";

const initialState = {
  filters: {
    country: "undefined",
    name: null
  },
  dataSource: "",
  loading: true
};

export const searchReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_INDEX:
      return {
        ...state,
        dataSource: payload,
        loading: false
      };
    case FETCH_SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload
        },
        loading: true
      };
    default:
      return state;
  }
};
