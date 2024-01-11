import * as React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Link, router } from "expo-router"
// import GoogleAuth from './app/components/GoogleAuth';
// import Landing from './app/pages/Landing';


export default function App() {


  return (
    <View style={styles.container}>
      {/* <GoogleAuth/> */}
      {/* <Landing/> */}
      <Text>Home page</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
