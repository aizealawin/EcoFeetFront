import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser"
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage';


WebBrowser.maybeCompleteAuthSession();


export default function App() {
const [userInfo, setUserInfo] = React.useState(null);
const [request, response, promptAsync] = Google.useAuthRequest({
  androidClientId: "984535196441-i4rg8d59bamg6dgkslpaso70a7lv7k6f.apps.googleusercontent.com",
  iosClientId: "984535196441-126ukmqmhrdgsmf3n7bpeksus2pefg7a.apps.googleusercontent.com",
  webClientId: "984535196441-4khlf4lpas9ah2octt4ciuvlaouq91o9.apps.googleusercontent.com"
})

async function handleSignInWithGoogle() {
  const user = await AsyncStorage.getItem("@user");
  if (!user){

  } else {
    setUserInfo(JSON.parse(user))
  }
}

  return (
    <View style={styles.container}>
      <Text>EcoFeat!</Text>
      <Button title='Sign in with Google' onPress={promptAsync} />
      <Text></Text>
      <StatusBar style="auto" />
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
