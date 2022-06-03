import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function CallApiVanilla() {
  const [dataUser, setDataUser] = useState({
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I6p5EJev2vO5g5BXXuYn5ISYNJO0bBsd--SwEbazg=s32-c-mo',
    email: '',
    first_name: '',
    id: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // Call API Method GET
    // fetch('https://reqres.in/api/users/2')
    //   // Jika berhasil, simpan didalam response dan parsing dengan json
    //   .then(response => response.json())
    //   // lalu kirim json ke
    //   .then(json => console.log(json));
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('Data object : ', dataForAPI);
    // console.log('Data stringify : ', JSON.stringify(dataForAPI));
    // // Call API Method POST
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('Post Response: ', json);
    //   });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      // Jika berhasil, simpan didalam response dan parsing dengan json
      .then(response => response.json())
      // lalu kirim json ke
      .then(json => {
        setDataUser(json.data);
      });
  };

  const dataForAPI = {
    name: 'morpheus',
    job: 'leader',
  };

  const postData = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call Api dengan Vanilla Js</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
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
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
