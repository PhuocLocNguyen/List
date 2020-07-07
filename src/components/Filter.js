import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5',
        'option 6',
        'option 7',
        'option 8',
        'option 9',
      ],
    };
  }
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.props.filterMode}
          onValueChange={value => this.props.onSetFilterMode(value)}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
});
const mapStateToProps = function(state) {
  return {filterMode: state.filterMode};
};
export default connect(
  mapStateToProps,
  actionCreator,
)(Filter);
