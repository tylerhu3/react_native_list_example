/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item ,deleteItem}) => {
  return (
    <>
      <TouchableOpacity style={styles.listitem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Icon onPress={()=>{
              console.log(item.id);
              deleteItem(item.id)
               }} name="remove" size={20} color="firebrick" />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  listitem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  listItemText: {
      fontSize:18,

  },
});

export default ListItem;
