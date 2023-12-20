import * as React from 'react'
import GoogleAuth from './components/GoogleAuth';


export default function App() {


  return (
    <View style={styles.container}>
      <GoogleAuth/>
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
