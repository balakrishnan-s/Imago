import { API_KEY } from 'react-native-dotenv'; // eslint-disable-line import/no-extraneous-dependencies

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
function requestEvents(location) {
  return {
    type: REQUEST_EVENTS,
    location,
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
function receiveEvents(location, json) {
  return {
    type: RECEIVE_EVENTS,
    location,
    events: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  };
}

function fetchEvents(location) {
  return (dispatch) => {
    dispatch(requestEvents(location));
    return fetch(`http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${location}`)
      .then(response => response.json())
      .then(json => dispatch(receiveEvents(location, json)));
  };
}
