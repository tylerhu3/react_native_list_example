

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

const Header = (props) => {
  return (
    <>
        <View style={styles.header}>
          <Text style={styles.text}>
            {props.title}
          </Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height:60,
    padding:15,
    backgroundColor:'darkslateblue'
  },
  text: {
    color:"#fff",
    fontSize: 23,
    textAlign: 'center',
  },

});

export default Header;
