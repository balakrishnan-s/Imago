import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/actions';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    this.props.fetchEvents('Amsterdam');
  }

  buildListFromEvents(events) {
    return events.map(eventEntity => (
      <Text>{eventEntity.title}</Text>
    ));
  }

  render() {
    const { events } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.buildListFromEvents(events)}
      </View>
    );
  }

}

const mapStateToProps = state => ({
  events: state.events.events,
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (location) => {
    dispatch(fetchEvents(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
