import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
// import {useAppNavigation} from '../hooks';
import PushNotification from 'react-native-push-notification';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getFCMToken = async () => {
  try {
    let token = await AsyncStorage.getItem('fcmToken');
    if (!token) {
      token = await messaging().getToken();
      await AsyncStorage.setItem('fcmToken', token);
    }
    console.log('Token: ', token);
  } catch (error) {
    throw error;
  }
};

export const notificationListener = async () => {
  // const navigation = useAppNavigation();
  //   messaging().onNotificationOpenedApp((remoteMessage) => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      // setLoading(false);
    });

  messaging().onMessage(async (remoteMessage) => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    PushNotification.localNotification({
      message: remoteMessage.notification?.body || 'message',
      title: remoteMessage.notification?.title,
    });
  });
  //   navigation.navigate('Home');
};

export const createChannel = async () => {
  PushNotification.channelExists('channel-id', (exists) => {
    if (!exists) {
      PushNotification.createChannel(
        {
          channelId: 'channel-id', // (required)
          channelName: 'My channel', // (required)
        },
        (created) => console.log(`createChannel returned '${created}'`),
      );
    }
  });
};
