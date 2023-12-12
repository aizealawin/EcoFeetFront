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

React.useEffect(() => {
  handleSignInWithGoogle();
}, [response])

async function handleSignInWithGoogle() {
  const user = await AsyncStorage.getItem("@user");
  if (!user){
    if(response?.type === 'success'){
      await getUserInfo(response.authentication.accessToken);
    }
  } else {
    setUserInfo(JSON.parse(user));
  }
}

const getUserInfo = async (token) => {
  if (!token) return;
  try { 
    const response = await fetch(
      "https://www.googleapis.com/userinfo/v2/me", 
      {
        headers: { Authorization: `Bearer ${token}`}
      }
    )
    const user = await response.json();
    await AsyncStorage.setItem("@user", JSON.stringify(user))
    setUserInfo(user)
  } catch (error) { 

  }
}

  return (
    <View style={styles.container}>
      <Text> 
      {JSON.stringify(userInfo, null, 2)}
      </Text>
      <Text>EcoFeat!</Text>
      <Button title='Sign in with Google' onPress={() => promptAsync()} />
      <Button title='delete local storage' onPress={() => AsyncStorage.removeItem("@user")}/>
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
