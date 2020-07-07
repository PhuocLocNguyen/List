import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: '',
      vn: '',
    };
  }
  addWord = () => {
    const {en, vn} = this.state;
    if (!en || !vn) {
      alert('ban chua truyen du thong tin');
      return;
    }
    this.props.onAddWord(en, vn);
    this.setState({en: '', vn: ''});
    this.inputEn.clear();
    this.inputVn.clear();
  };
  renderForm = shouldShowForm => {
    if (shouldShowForm) {
      return (
        <View style={styles.containerForm}>
          <View style={styles.viewTextInput}>
            <TextInput
              ref={ref => (this.inputEn = ref)}
              onChangeText={text => (this.state.en = text)}
              style={styles.textInput}
            />
            <TextInput
              ref={ref => (this.inputVn = ref)}
              onChangeText={text => (this.state.vn = text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={() => this.addWord()}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchableForm}>Add Word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onToggleForm()}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchableForm}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.props.onToggleForm()}
          style={styles.touchableShowForm}>
          <Text style={styles.textTouchableForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return <>{this.renderForm(this.props.shouldShowForm)}</>;
  }
}
const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
  },
  viewTextInput: {
    flex: 2,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  containerTouchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  touchableAddword: {
    padding: 10,
    backgroundColor: '#218838',
    borderRadius: 10,
  },
  touchableCancel: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  textTouchableForm: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  touchableShowForm: {
    padding: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapStateToProps = function(state) {
  return {shouldShowForm: state.shouldShowForm};
};
export default connect(
  mapStateToProps,
  actionCreator,
)(Form);
