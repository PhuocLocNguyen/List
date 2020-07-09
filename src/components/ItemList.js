import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchDataWords();
  }
  itemFlatList = (item, index) => {
    const {filterMode} = this.props;
    // Cac truong hop phai return giao dien
    // Th1 : Show_All
    // Th2 : Show_Forgot va item.memorized
    // Th3 : Show_memorized va !item.memorized
    if (filterMode === 'Show_Forgot' && !item.isMemorized) {
      console.log('1');
      return null;
    } else if (filterMode === 'Show_Memorized' && item.isMemorized) {
      return null;
    } else {
      return (
        <View style={styles.itemFlatListGroup}>
          <View style={styles.textGroup}>
            <Text style={styles.textEn}>{item.en}</Text>
            <Text style={styles.textVn}>
              {item.isMemorized ? '----' : item.vn}
            </Text>
          </View>

          <View style={styles.textGroup}>
            <TouchableOpacity
              onPress={() => this.props.onToggleMemorized(item.id)}
              style={
                item.isMemorized
                  ? styles.touchableFogot
                  : styles.touchableIsMemorized
              }>
              <Text style={styles.textItemFlatList}>
                {item.isMemorized ? 'Forgot' : 'IsMemorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onRemove(item.id)}
              style={styles.touchableRemove}>
              <Text style={styles.textItemFlatList}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.containerFlatList}>
        <FlatList
          extraData={this.props.words}
          keyExtractor={(item, index) => item.id.toString()}
          data={this.props.words}
          renderItem={({item, index}) => this.itemFlatList(item, index)}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerFlatList: {
    flex: 6,
  },
  itemFlatListGroup: {
    height: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    borderWidth: 0.15,
  },
  textGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textEn: {
    fontSize: 25,
    color: '#45B157',
    fontWeight: '900',
  },
  textVn: {
    fontSize: 25,
    color: '#DA2846',
    fontWeight: '900',
  },
  textItemFlatList: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  touchableFogot: {
    padding: 10,
    backgroundColor: '#45B157',
    borderRadius: 10,
  },
  touchableRemove: {
    padding: 10,
    backgroundColor: '#DA2846',
    borderRadius: 10,
  },
  touchableIsMemorized: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    color: 'white',
  },
  separator: {
    height: 10,
  },
});
const mapStateToProps = function(state) {
  return {words: state.words, filterMode: state.filterMode};
};
export default connect(
  mapStateToProps,
  actionCreator,
)(ItemList);
