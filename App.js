import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Link } from "expo-router"
import GoogleAuth from './components/GoogleAuth';
import Landing from './pages/Landing';


export default function App() {


  return (
    <View style={styles.container}>
      {/* <GoogleAuth/> */}
      <Landing/>
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
