import { RECEIVE_EVENTS } from '../actions/actions';

const initialState = {
  events: [],
  lastFetch: new Date(),
};

function eventsReducer(state = initialState, action) {
  switch (action.type) {

    case RECEIVE_EVENTS: {
      const currentEvents = state.events;
      const payloadEvents = action.payload.events;
      return {
        ...state,
        events: [...new Set([...currentEvents, ...payloadEvents])],
        lastFetch: action.payload.receivedAt,
      };
    }

    default:
      return state;

  }
}

export default eventsReducer;
