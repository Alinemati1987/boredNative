import { combineReducers } from "redux";
import activitiesReducer from "./activities/reducer";
// import weather from "./weather/reducer";
import appState from "./appState/reducer";

const reducer = combineReducers({
  activities: activitiesReducer,
  appState,
  // weather,
});

export default reducer;
