import React, { Component } from "react"
import { Text, View, Image } from 'react-native'

class FlexBox extends Component {
  render() {
    return (
      <>
        <Text style={{ fontSize: 20, fontWeight: '700', marginVertical: 40 }} >Materi Flexbox</Text>
        <View style={{ flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent: 'space-between' }} >
          <View style={{ backgroundColor: '#1abc9c', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#f1c40f', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#3498db', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#e74c3c', width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Image source={{ uri: 'https://yt3.ggpht.com/yti/APfAmoG9zf63qAKx1bI8LVMBcUwgsCXW49nVxaInnZ-7DQ=s88-c-k-c0x00ffffff-no-rj-mo' }} style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14, }} />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dimas Nuryadin</Text>
            <Text>100 rb subscriber</Text>
          </View>
        </View>

      </>
    )
  }
}

export default FlexBox