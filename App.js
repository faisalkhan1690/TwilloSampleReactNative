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
import TwilioModule from 'react-native-twilio-sdk';



export default class App extends Component {

  SERVER_TOKEN_URL='https://YOUR_DOMAIN_HERE.twil.io/chat-token';
  DEFAULT_CHANNEL_NAME='general';
  TAG='TwilioChat'
  mIdentity = 'USER_IDENTITY';



  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Click to login"
            onPress={()=>
              {
                TwilioModule.show("Hello World");
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
