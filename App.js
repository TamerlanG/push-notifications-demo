import React, {Component} from 'react';
import PushNotificationManager from './PushNotificationsManager';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <PushNotificationManager>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>FCM Test</Text>
        </View>
      </PushNotificationManager>
    );
  }
}

export default App;
