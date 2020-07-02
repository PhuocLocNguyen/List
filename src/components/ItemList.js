import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
class ItemList extends Component {
  itemFlatList = (item, index) => {
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
            onPress={() =>
              this.props.dispatch({type: 'TOGGLE_MEMORIZED', id: item.id})
            }
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
            onPress={() => this.props.dispatch({type: 'REMOVE', id: item.id})}
            style={styles.touchableRemove}>
            <Text style={styles.textItemFlatList}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
    flex: 2,
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
  return {words: state.words};
};
export default connect(mapStateToProps)(ItemList);
