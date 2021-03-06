import { SET_USER } from "../constants/actions";

const initState = {
  user: {},
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return { ...state };
  }
};
