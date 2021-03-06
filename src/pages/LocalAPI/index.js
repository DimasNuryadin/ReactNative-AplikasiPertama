import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Axios from 'axios';

const Item = ({ name, email, bidang, onPress, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      {/* Touchabel supaya component bisa di klik */}
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://avatars.dicebear.com/api/adventurer-neutral/${email}.png`,
          }}
          style={styles.avatars}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function LocalAPI() {
  // Tampung data form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  // Post Data
  const submit = () => {
    // Data yang akan dikirim
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      console.log('Data before send: ', data);
      // ip dari emulator (10.0.2.2)
      // ip sesuai jaringan 192.168.2.86
      Axios.post('http://192.168.2.86:3004/users/ ', data).then(res => {
        console.log('res : ', res);
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(`http://192.168.2.86:3004/users/${selectedUser.id}`, data).then(
        res => {
          console.log('res update: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        },
      );
    }
  };

  // Get Data
  const getData = () => {
    Axios.get('http://192.168.2.86:3004/users/').then(res => {
      console.log('res get data: ', res);
      setUsers(res.data);
    });
  };

  // Update Data
  const selectItem = item => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  // Delete Data
  const deleteItem = item => {
    // console.log(item);
    Axios.delete(`http://192.168.2.86:3004/users/${item.id}`).then(res => {
      console.log('res delete: ', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bidang"
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Anda yakin akan menghapus user ini?', [
                { text: 'Tidak', onPress: () => console.log('button tidak') },
                { text: 'Ya', onPress: () => deleteItem(user) },
              ])
            }
          />
        );
      })}
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
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatars: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
