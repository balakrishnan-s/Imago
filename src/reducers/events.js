import { RECEIVE_EVENTS } from '../actions/actions';

const initialState = {
  events: [],
  lastFetch: new Date(),
};

const events = (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_EVENTS:
      return {
        ...state,
        events: action.payload.events,
        lastFetch: action.payload.receivedAt,
      };

    default:
      return state;

  }
};

export default events;
