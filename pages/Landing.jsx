import { View, Text, Image } from 'react-native'
import React from 'react'

const Landing = () => {
  return (
    <View>
      <Text>Landing</Text>
      <Image
        // source={
        //   require = ('EcoFeet-Frontend/EcoFeetFront/assets/EcoFeetLogo.png')
        // }
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}

export default Landing