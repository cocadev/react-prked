import { SET_BOOKINGS } from "../types";

const initialState = {
  bookings: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BOOKINGS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
