import { Text, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from "expo-web-browser"
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage';

const GoogleAuth = () => {
  WebBrowser.maybeCompleteAuthSession();

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
    if (!user) {
      if (response?.type === 'success') {
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
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user))
      setUserInfo(user)
    } catch (error) {

    }
  }

  return (
    <View>
      <Text>
        {JSON.stringify(userInfo, null, 2)}
      </Text>
      <Pressable title='Sign in with Google' onPress={() => promptAsync()}>
        <Text>
          Sign in with Google
        </Text>
      </Pressable>
      <Pressable title='delete local storage' onPress={() => AsyncStorage.removeItem("@user")} />
      <StatusBar style="auto" />
    </View>
  );
}


export default GoogleAuth


