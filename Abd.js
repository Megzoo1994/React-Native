import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
export  class Abd extends Component {
  render() {
    const { username, touchableOpacity } = styles;
    return (
      <ImageBackground
        source={{
          uri:
            'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={{ width: '100%', height: '100%', flex: 1 }}>
        <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 150,
          }}>
          
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
            React Native
          </Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 100 }}>
          <TextInput style={username} placeholder="   Username" />
          <TextInput style={[username]} placeholder="   Password" 
          secureTextEntry= {true}/>
        </View>
        <TouchableOpacity style={touchableOpacity}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity>
          <Text style={{ color: 'white' }}>Create Account</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{alignItems: 'flex-end', marginBottom: 20}}>
          <Text style={{ color: 'white' }}>Forget Password?</Text>
          </TouchableOpacity>
          </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  username: {
    width: 330,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 35,
    marginBottom: 15,
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00d8ff',
    width: 300,
    height: 50,
    borderRadius: 35,
    marginBottom: 15,
    marginLeft: 30,
  },
});