import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Story = (props) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image source={{ uri: props.gambar }} style={{ width: 70, height: 70, borderRadius: 70 / 2 }} />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  )
}

export default function PropsDinamis() {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          <Story gambar="https://lh3.googleusercontent.com/ogw/ADea4I6p5EJev2vO5g5BXXuYn5ISYNJO0bBsd--SwEbazg=s32-c-mo" judul="Youtube Channel" />
          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/280495788_716868146179663_5453801587653878194_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=OBrHRtlLxJMAX8NqVHQ&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT8c2eS-IY7DQ4tDsLRCoTPJvKBCpU1wKVYBw7D4WskWZA&oe=629D04F8&_nc_sid=9a90d6" judul="Kelas Online" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/281590435_698621521447036_7591417387758396008_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=UMh_ZxJfNEEAX_ejZ2B&tn=YB9x5yVQSvtiDjHN&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT_0XTgv9dZOVDQNTr0ELUbJEYh-6CRVpLT8oqz8vTlvVQ&oe=629D65B1&_nc_sid=9a90d6" judul="React JS" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/280551804_2425512850944767_4244746852910425130_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kbZDOA9KCDsAX9zDerO&tn=YB9x5yVQSvtiDjHN&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT-L03pIeJLb4mQCGdtiqDI2IPh17h0zteBtjHcycs4YjQ&oe=629D27EC&_nc_sid=9a90d6" judul="React Native" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/271200744_873216860035393_9105484193780108120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Zq3U5iAJxk4AX8GC6gR&tn=YB9x5yVQSvtiDjHN&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT85TDZ_8RidFNGhaV8GHWt4jprnIKZgWEi2tpsWYbhpYg&oe=629C7CB8&_nc_sid=9a90d6" judul="Mern Stack" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/280842293_124852640199228_355828339960182740_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=n-mv8rmViZsAX8WfXnS&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT9k6nBjgc33ijmwDmPytR6R3JtnTBDvrnJoO5x0-Vp08A&oe=629CCB24&_nc_sid=9a90d6" judul="UI / UX" />

          <Story gambar="https://lh3.googleusercontent.com/ogw/ADea4I6p5EJev2vO5g5BXXuYn5ISYNJO0bBsd--SwEbazg=s32-c-mo" judul="Youtube Channel" />
          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/280495788_716868146179663_5453801587653878194_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=OBrHRtlLxJMAX8NqVHQ&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT8c2eS-IY7DQ4tDsLRCoTPJvKBCpU1wKVYBw7D4WskWZA&oe=629D04F8&_nc_sid=9a90d6" judul="Kelas Online" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/281590435_698621521447036_7591417387758396008_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=UMh_ZxJfNEEAX_ejZ2B&tn=YB9x5yVQSvtiDjHN&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT_0XTgv9dZOVDQNTr0ELUbJEYh-6CRVpLT8oqz8vTlvVQ&oe=629D65B1&_nc_sid=9a90d6" judul="React JS" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/280551804_2425512850944767_4244746852910425130_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kbZDOA9KCDsAX9zDerO&tn=YB9x5yVQSvtiDjHN&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT-L03pIeJLb4mQCGdtiqDI2IPh17h0zteBtjHcycs4YjQ&oe=629D27EC&_nc_sid=9a90d6" judul="React Native" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/271200744_873216860035393_9105484193780108120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Zq3U5iAJxk4AX8GC6gR&tn=YB9x5yVQSvtiDjHN&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT85TDZ_8RidFNGhaV8GHWt4jprnIKZgWEi2tpsWYbhpYg&oe=629C7CB8&_nc_sid=9a90d6" judul="Mern Stack" />

          <Story gambar="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/280842293_124852640199228_355828339960182740_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=n-mv8rmViZsAX8WfXnS&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT9k6nBjgc33ijmwDmPytR6R3JtnTBDvrnJoO5x0-Vp08A&oe=629CCB24&_nc_sid=9a90d6" judul="UI / UX" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})