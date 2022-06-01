import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Communication() {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi Antar Component</Text>
      <Cart quantity={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
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