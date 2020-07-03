import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import List from './src/components/List';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <List />
        </Provider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
