export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export function signIn(user){
    return {
      type: SIGN_IN,
      payload: user,
    };
}

export function signOut() {
  return {
    type: SIGN_OUT,
    payload: {},
  };
}