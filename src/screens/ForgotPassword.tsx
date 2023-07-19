import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {validation} from '../utils/validation';
// import RNSmtpMailer from 'react-native-smtp-mailer';
// import EmailSender from 'react-native-smtp';
import {NativeModules} from 'react-native';
const {Smtp} = NativeModules;
// export default Smtp;

const ForgotPassword: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [email, setEmail] = useState('');

  const handleEmail = () => {
    // const to = [email]; // string or array of email addresses
    // RNemail(to, {
    //   // Optional additional arguments
    //   // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
    //   // bcc: 'mee@mee.com', // string or array of email addresses
    //   subject: 'Show how to use',
    //   body: 'Some body right here',
    //   // checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    // }).catch(console.error);

    try {
      Smtp.config({
        // mailhost: 'smtp.gmail.com',
        // port: '25',
        // ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
        // username: 'omkargujja01@gmail.com',
        // password: 'zzntecwcfejdgeev',
        // fromName: 'Some Name', // optional
        // replyTo: 'omkargujja152@gmail.com',
        // recipients: 'omkargujja152@gmail.com',
        // bcc: ['bccEmail1', 'bccEmail2'], // optional
        // subject: 'subject',
        // htmlBody: '<h1>header</h1>',
        host: 'smtp.gmail.com',
        port: '25', // Optional. Default to 465
        username: 'omkargujja01@gmail.com',
        password: 'zzntecwcfejdgeev',
        isAuth: 'true', // Optional. Default to `true`
        tls: 'true', // Optional. Default to `true`
      });
      // const attachments = [
      //   RNFS.ExternalStorageDirectoryPath + '/Tracklist/file.txt',
      //   RNFS.ExternalStorageDirectoryPath + '/Tracklist/file_2.txt',
      // ];

      // Now send the mail
      Smtp.send(
        {
          from: 'omkargujja01@gmail.com',
          to: 'omkargujja152@gmail.com',
          subject: 'The subject',
          body: '<h3> Cool Body </h3>',
          replyTo: 'reply@email.com', // Optional
        },
        // attachments, // This second parameter is mandatory. You can send an empty array.
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderHeader = () => {
    return <components.Header title='Forgot password' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        <text.T16 style={{marginBottom: 40}}>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </text.T16>
        <components.InputField
          label='email'
          placeholder='calliemosley@mail.com'
          onChangeText={(text) => setEmail(text)}
          containerStyle={{marginBottom: 20}}
          value={email}
        />

        <components.Button
          title='Send'
          onPress={() => {
            if (validation({email})) {
              handleEmail();
              navigation.navigate('ConfirmationCode');
            }
          }}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default ForgotPassword;
