import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Card from './Card';

class EventsList extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: [] };
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => (
    <Card
      item={item}
    />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        // onEndReachedThreshold
        // onRefresh
        keyExtractor={this.keyExtractor}
        // ListHeaderComponent
        // ListFooterComponent
        // ListEmptyComponent
        renderItem={this.renderItem}
      />
    );
  }

}

export default EventsList;
