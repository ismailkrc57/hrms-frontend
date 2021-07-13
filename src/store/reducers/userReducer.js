import { SIGN_IN, SIGN_OUT } from "../actions/userActions";
import { user } from "../initialValues/user";

const initialState = {
  user: user,
};
export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      return {
        user:  payload ,
      };
    case SIGN_OUT:
      return {
        user: {type:-1,user:{}},
      };
    default:
      return state;
  }
}
