import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

export default function CallApiVanilla() {
  useEffect(() => {
    // Call API Method GET
    fetch('https://reqres.in/api/users/2')
      // Jika berhasil, simpan didalam response dan parsing dengan json
      .then(response => response.json())
      // lalu kirim json ke
      .then(json => console.log(json));

    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    console.log('Data object : ', dataForAPI);
    console.log('Data stringify : ', JSON.stringify(dataForAPI));
    // Call API Method POST
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('Post Response: ', json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call Api dengan Vanilla Js</Text>
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
