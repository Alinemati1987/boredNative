import { APP_LOADING, APP_DONE_LOADING } from "./actions";

const initialState = {
  loading: false,
  message: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
}
