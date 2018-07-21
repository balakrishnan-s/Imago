const initialState = {
  loggedIn: false,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {

    case 'LOG_IN':
      return { ...initialState, loggedIn: false };

    default:
      return state;

  }
};

export default currentUser;
