/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Click to login"
            onPress={()=>
              {
                console.warn("Hello World");
              }
          }
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
