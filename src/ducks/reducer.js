const initialState = {
  username: "",
  id: 0,
  profilePic: ""
};
const SET_USER = "SET_USER";

export function setUser( user ) {
  return {
    type: SET_USER,
    payload:  user 
  };
}

export default (state = initialState, action) => {
  //   const { type, payload } = action;
  switch (action.type) {
    case SET_USER:
        // console.log(action.payload)
      const { username, profile_pic } = action.payload;
      return { ...state, username, profilePic: profile_pic };
    default:
      return state;
  }
};
