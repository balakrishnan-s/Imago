import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../selectors/eventSelectors';
import commonStyles from '../styles/common';

class MapScreen extends Component {

  static propTypes = {
    events: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    // need this later
  }

  render() {
    const { events } = this.props;
    return (
      <SafeAreaView style={commonStyles.flexContainer} />
    );
  }

}

const mapStateToProps = state => ({
  events: getEvents(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
