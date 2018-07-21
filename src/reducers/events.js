const initialState = [];

const events = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: action.id,
        },
      ];

    default:
      return state;

  }
};

export default events;
