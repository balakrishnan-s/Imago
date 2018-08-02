import { API_KEY } from 'react-native-dotenv'; // eslint-disable-line import/no-extraneous-dependencies

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
function requestEvents(location) {
  return {
    type: REQUEST_EVENTS,
    payload: {
      location,
    },
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
function receiveEvents(location, response) {
  return {
    type: RECEIVE_EVENTS,
    payload: {
      location,
      events: response.events.event,
      receivedAt: Date.now(),
    },
  };
}

export function fetchEvents(location) {
  return (dispatch) => {
    dispatch(requestEvents(location));
    return fetch(`http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${location}`)
      .then(response => response.json())
      .then(json => dispatch(receiveEvents(location, json)));
  };
}
