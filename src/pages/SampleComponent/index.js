import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#f0932b'}} />

      <Text>Hello</Text>

      <Dimas />

      <Photo />

      <TextInput style={{borderWidth: 1}} />

      <BoxGreen />
      <Profile />
    </View>
  );
};

const Dimas = () => {
  return <Text>Dimas Nuryadin</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

// Class Component
class BoxGreen extends Component {
  render() {
    return <Text>Ini Class Coponent</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <>
        <Image
          source={{uri: 'https://placeimg.com/100/100/arch'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue'}}>Ini adalah bangunan</Text>
      </>
    );
  }
}

export default SampleComponent;
