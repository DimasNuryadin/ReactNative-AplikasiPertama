import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BasicJavascript() {
  // Tipe Data primitive
  const nama = 'Dimas';
  let age = 21;

  // Tipe Data complex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'Kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  };

  const namaOrang = ['Dimas', 'Adit', 'Rizky'];

  // if (hewanPeliharaan.nama === 'Miaw') {
  //   console.log('Hallo Miaw')
  // } else {
  //   console.log('Hewan siapa ini?');
  // }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallo Miaw, apa kabar?'
    // } else {
    //   hasilSapa = 'Hewan siapa ini?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? 'Hallo Miaw, apa kabar?'
      : 'Ini hewan Siapa?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>Nama : {nama}</Text>
      <Text>Age : {age}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>=======</Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
