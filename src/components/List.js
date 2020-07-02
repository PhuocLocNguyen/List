import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from './Form';
import ItemList from './ItemList';
import {connect} from 'react-redux';

class List extends Component {
  render() {
    return (
      <View style={styles.containerList}>
        <Form />
        <ItemList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
  },
});

export default connect()(List);
