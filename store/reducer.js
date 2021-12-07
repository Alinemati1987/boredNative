import { combineReducers } from "redux";
import activitiesReducer from "./activities/reducer";
// import weather from "./weather/reducer";

const reducer = combineReducers({
  activities: activitiesReducer,
  // weather,
});

export default reducer;
