// Functionol Component

import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

export default function App() {
  return (
    <View>

      <View style={{width: 80, height: 80, backgroundColor: '#f0932b'}}/>

      <Text>Hello</Text>

      <Dimas/>

      <Photo/>

      <TextInput style={{borderWidth: 1}} />
    </View>
  )
}

const Dimas = () => {
  return <Text>Dimas Nuryadin</Text>
}

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width:100, height:100}} />
}