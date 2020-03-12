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
  Alert,
  Image,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {uuid} from 'uuidv4';

import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'juice'},
  ]);

  const deleteItem = (id) => {
    console.log("delete Item ")
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (newItem) => {
    if(!newItem){
      console.log("add Item Error")
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
         
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      return;
    }
    else{
    console.log("add Item ")
    items.unshift({id:uuid(), text: newItem});
    setItems(items);}
  };


  return (
    <>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={
          ({item}) => <ListItem deleteItem = {deleteItem} item={item} />   }
      />
    </>
  );
};

{
  /* <View style={styles.container}>
          <Image
          style={styles.img}
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} />
        </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  img: {
    backgroundColor: 'pink',
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
  },
});

export default App;
