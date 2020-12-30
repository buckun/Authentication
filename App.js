import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import firebase from 'firebase';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Banner from './src/components/Banner';
import LoginForm from './src/components/LoginForm';
import {Spinner, MyButton } from './src/components/common'

const firebaseConfig = {
  apiKey: "AIzaSyDJ3flstK1hFltrk1nZ5wFUPCnksyp1rY0",
  authDomain: "kitaplistesi-8daf8.firebaseapp.com",
  projectId: "kitaplistesi-8daf8",
  storageBucket: "kitaplistesi-8daf8.appspot.com",
  messagingSenderId: "154427379364",
  appId: "1:154427379364:web:efc7307cca742440c82031",
  measurementId: "G-9116KXC72E"
};

const App = () => {

  const [state, setState] = useState()

  React.useEffect(() => {
    console.log("firebase initializeApp", !firebase.apps.length)
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }

    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;
      setState(loggedIn)
    })
  }, [])

  const renderContent = () => {

    switch (state) {
      case true:
        return (
          <MyButton spinner={false}
            onPress={() => firebase.auth().signOut()}
            color='#E87B79'
            title='Logout' />
        )
      case false:
        return (
          <LoginForm />
        )
      default:
        return (
          <Spinner />
        )
    }
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#0200EB' }}>
        <Banner text="Authentication" />
      </SafeAreaView>
      {renderContent()}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  }
});

export default App;
