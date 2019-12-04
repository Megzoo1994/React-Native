import React, { Component } from 'react'
import { View, ImageBackground, Image, Text, TextInput, StyleSheet, TouchableOpacity, Alert , ScrollView } from 'react-native';

import {InputText} from '../components/common';


export class Login extends Component {
    render() {

        const { InputTextstyle } = styles
        return (
             
            <ImageBackground source={{ uri: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                style={{
                    width: '100%',
                    height: '100%',
                    flex: 1
                }}>
                    <ScrollView>

                <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 100 }}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}

                        style={{
                            width: 100,
                            height: 100,
                        }} />

                    <Text style={{ fontSize: 15, color: 'white', fontWeight: '600' }}> REACT NATIVE </Text>
                </View>

                <View style={{backgroundColor:'white' , borderRadius:20, marginTop:50,}} >
                        <TextInput placeholder='User Name' style={{InputTextstyle}}>


                        </TextInput>


                </View>

                <View style={{backgroundColor:'white' , borderRadius:20, marginTop:30,}} >
                        <TextInput placeholder='password' style={{InputTextstyle}}
                         secureTextEntry={true}
                        >


                        </TextInput>


                </View>
                <View  style={{justifyContent:'center',alignItems:'center' ,marginTop:20,}}>
                        <View  style={{ justifyContent:'center',alignItems:'center' , width:200, height:50,backgroundColor:'blue',borderRadius:20}}>
                        <TouchableOpacity style={{backgroundColor:'blue'}}
                        onPress={() => Alert.alert('please login again')}
                        >

                            <Text style={{color:'white'}} > LOGIN </Text>
                            
                        </TouchableOpacity>
                        </View>
                        </View>
             
                        </ScrollView>


            </ImageBackground>
           

        )
    }
}

const styles = StyleSheet.create({
    InputTextstyle :{

    }
    
})
   
  