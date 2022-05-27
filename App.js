import React from 'react'
import { View, ScrollView } from 'react-native'
import MateriFlexBox from './Component/MateriFlexBox'
import PositionReactNative from './Component/PositionReactNative'
import SampleComponent from './Component/SampleComponent'
import StylingReactNativeComponent from './Component/StylingReactNativeComponent'

// Functionol Component
export default function App() {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  )
}