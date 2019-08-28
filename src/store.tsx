import { createStore } from "redux";
import { reducer } from "./reducers/selectedSection";

export default createStore(reducer);
