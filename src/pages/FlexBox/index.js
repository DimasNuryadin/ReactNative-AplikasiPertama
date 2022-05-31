import React, { Component, useState, useEffect } from "react"
import { Text, View, Image } from 'react-native'

// Class
// class FlexBox extends Component {
//   // 1
//   constructor(props) {
//     super(props)
//     console.log('==> constructors')
//     this.state = {
//       subscriber: 200,
//     }
//   }

//   // 3
//   // fungsi akan dijalankan ketika aplikasi sudah render
//   componentDidMount() {
//     console.log('==> componennt did mount')
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       })
//     }, 2000)
//   }

//   // fungsi akan  dijalankan ketika ada perubahan
//   componentDidUpdate() {
//     console.log('==> component did update')
//   }

//   // fungsi akan dijalankan ketika komponen menghilang
//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     // 2
//     console.log('==> render')
//     return (
//       <>
//         <Text style={{ fontSize: 20, fontWeight: '700', marginVertical: 40 }} >Materi Flexbox</Text>
//         <View style={{ flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent: 'space-between' }} >
//           <View style={{ backgroundColor: '#1abc9c', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#f1c40f', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#3498db', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#e74c3c', width: 50, height: 50 }} />
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//           <Image source={{ uri: 'https://yt3.ggpht.com/yti/APfAmoG9zf63qAKx1bI8LVMBcUwgsCXW49nVxaInnZ-7DQ=s88-c-k-c0x00ffffff-no-rj-mo' }} style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14, }} />
//           <View>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dimas Nuryadin</Text>
//             <Text>{this.state.subscriber} rb subscriber</Text>
//           </View>
//         </View>
//         <View>
//           <View style={{ backgroundColor: '#1abc9c', flex: 1, height: 50 }} />
//           <View style={{ backgroundColor: '#3498db', width: 50, height: 50 }} />
//         </View>
//         <View style={{ flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'flex-end' }} >
//           <View style={{ backgroundColor: '#1abc9c', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#f1c40f', flex: 2, height: 100 }} />
//           <View style={{ backgroundColor: '#3498db', flex: 2, height: 150 }} />
//           <View style={{ backgroundColor: '#e74c3c', flex: 3, height: 200 }} />
//         </View>

//       </>
//     )
//   }
// }


// Functional
const FlexBox = () => {
  const [subscriber, setSusbcriber] = useState(200)

  useEffect(() => {
    console.log('did mount');

    setTimeout(() => {
      setSusbcriber(400)
    }, 2000);
      
    return () => {
      console.log('did update')
    }
  }, [subscriber]); // setiap perubahan apa yang mau di baca? 

  // akan dipanggil setiap subscriber ada perubahan
  // useEffect(() => {
  //   console.log('di update')
  //   setTimeout(() => {
  //     setSusbcriber(400)
  //   }, 2000);
  // }, [subscriber])

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
          <Text>{subscriber} rb subscriber</Text>
        </View>
      </View>
      <View>
        <View style={{ backgroundColor: '#1abc9c', flex: 1, height: 50 }} />
        <View style={{ backgroundColor: '#3498db', width: 50, height: 50 }} />
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'flex-end' }} >
        <View style={{ backgroundColor: '#1abc9c', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#f1c40f', flex: 2, height: 100 }} />
        <View style={{ backgroundColor: '#3498db', flex: 2, height: 150 }} />
        <View style={{ backgroundColor: '#e74c3c', flex: 3, height: 200 }} />
      </View>

    </>
  )
}

export default FlexBox