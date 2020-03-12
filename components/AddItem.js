/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const AddItem = ({addItem}) => {
    const[text, setText] = useState('')
  return (
    <>
      <View style={styles.header}>
        <TextInput placeholder="Add Item..." style={styles.input} 
        onChangeText={text => { setText(text)}} />
        <TouchableOpacity
        onPress={()=>{addItem(text)}}
        style={styles.btn}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={20} />
            Add Item
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

input: {
    height: 60,
    padding:8,
    fontSize: 16
},
btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
},
btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
},



});

export default AddItem;
