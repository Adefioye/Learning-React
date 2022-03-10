import {
  CREATE_STREAM,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
} from "../actions/types";
import _ from "lodash";

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return state.filter((state) => state.id === action.payload.id);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default streamsReducer;





