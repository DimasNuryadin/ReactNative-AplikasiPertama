import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import cart from '../../assets/icons/cart.png'

export default function Cart(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading} >Materi Posisi React Native</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{ props.quantity }</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    fontSize: 20
  },
  wrapper: {
    padding: 20,
    alignItems: 'center'
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40
  },
  iconCart: {
    width: 50,
    height: 50
  },
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8
  },
  notif: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0
  }
})