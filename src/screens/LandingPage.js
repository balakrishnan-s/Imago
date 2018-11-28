import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEvents as fetchEventsAction } from '../actions/actions';
import { getEvents } from '../selectors/eventSelectors';
import commonStyles from '../styles/common';
import EventsList from '../components/EventsList';

class LandingPage extends Component {

  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    events: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    const { fetchEvents } = this.props;
    fetchEvents('Amsterdam');
  }

  render() {
    const { events } = this.props;
    return (
      <SafeAreaView style={commonStyles.flexContainer}>
        <EventsList
          data={events}
        />
      </SafeAreaView>
    );
  }

}

const mapStateToProps = state => ({
  events: getEvents(state),
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (location) => {
    dispatch(fetchEventsAction(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
