import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "../actions/type";

const initialState = { profile: undefined, profiles: undefined, loading: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE:
      return { ...state, loading: false, profile: action.payload };
    case GET_PROFILES:
      return { ...state, loading: false, profiles: action.payload };
    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: undefined };
    default:
      return state;
  }
}
