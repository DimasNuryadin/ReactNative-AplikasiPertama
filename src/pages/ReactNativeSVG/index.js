import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IllustrationMyApp from '../../assets/images/undraw_react_re_g3ui.svg'

export default function ReactNativeSVG() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Menggunakan File SVG didalam React Native</Text>
      <IllustrationMyApp width={244} height={125} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  }
})