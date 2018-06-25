import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput, TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';


import {
  TwilioVideo,
  TwilioVideoLocalView,
  TwilioVideoParticipantView
} from 'react-native-twilio-video-webrtc'


export default class App extends Component {
  _onVideoConnectButtonPress = () => {
    this.refs.twilioVideo.connect({roomName: "myroom", accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzY1NGY1OGQ1ODYzMTk2NmMwYWQyMzI0OWVkODEzMDI4LTE1Mjk5MTEyNDEiLCJpc3MiOiJTSzY1NGY1OGQ1ODYzMTk2NmMwYWQyMzI0OWVkODEzMDI4Iiwic3ViIjoiQUMxZTM2MGViNzgyNTRiZmYxZGIyNjMxZDI1YzdkMTg5OCIsImV4cCI6MTUyOTkxNDg0MSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiVXNlciAyICIsInZpZGVvIjp7fX19.dboEF4g909HtnGAp8SZn8_s6z8-Bnm-h_VLvmuWpeLY"});
  }

  _onVideoDisconnectButtonPress = () => {
    this.refs.twilioVideo.disconnect();
  }

  _onVideoConnectFailure = (response) => {
      Alert.alert('', 'Connect failure: ' + JSON.stringify(response));
  };

  render() {
    return (
      <View style={styles.container}>
        <TwilioVideo ref="twilioVideo" onRoomDidFailToConnect={this._onVideoConnectFailure} />

        <View style={styles.videoViewParent}>
          <TwilioVideoLocalView style={styles.videoViewContainer} />
          <TwilioVideoParticipantView style={styles.videoViewContainer} />
        </View>
        <View style={styles.videoControls}>
          <TouchableWithoutFeedback onPress={this._onVideoConnectButtonPress}>
            <View style={styles.videoControlBtn}>
              <Text style={styles.videoControlBtnText}>CONNECT</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this._onVideoDisconnectButtonPress}>
            <View style={styles.videoControlBtn}>
              <Text style={styles.videoControlBtnText}>DISCONNECT</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
  },
  videoViewParent: {
      width: '100%',
      height: 150,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF'
  },
  videoViewContainer: {
      flex: 0.5,
      backgroundColor: '#FFFFFF'
  },
  videoControls: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
  },
  videoControlBtn: {
      flex: 0.5,
      backgroundColor: '#FF0000'
  },
  videoControlBtnText: {
      fontSize: 20,
      padding: 10,
      color: '#FFFFFF',
      textAlign: 'center'
  }
});
