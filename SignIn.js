import React, { Component } from 'react'

import { Text, Image, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Container, InputText, TextLine, Btn } from '../components/common';
import { images } from '../assets/images';
import { icons } from '../assets/icons';


//import CameraRollPicker from 'react-native-camera-roll-picker';

export class SignIn extends Component {

    state = { btnLoading: false }

    render() {
        const { touchableOpacitystyle, txtStyle, viewStyle } = styles
        const { btnLoading } = this.state
        return (

            <Container >
                <TouchableOpacity style={touchableOpacitystyle}  >
                    <Image source={icons.camera} style={{ width: 50, height: 50 }} />
                    
                </TouchableOpacity>
                <Text style={txtStyle }> إختر صورة </Text>

                <InputText

                    title={'البريد اللأكتروني'}
                    placeholder={'أضف موقعك الإلكتروني'}

                    customeStyle={{ marginTop: 10 }}
                />

                <InputText
                    title={'أضف موقعك'}
                    placeholder={'الموقع'}

                    SecondImage={icons.location}
                    secondImageStyle={{ width: 20, height: 20 }}
                    customeStyle={{ marginTop: 10, marginBottom: 10 }}
                />

                <View style={{ width: 325, alignItems: 'flex-end', }}>
                    <Text style={{ textAlign: 'right' }}> حسابات التواصل الإجتماعي </Text>
                </View>


                <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', marginBottom: 10, width: 325 }} >
                    <InputText
                        placeholder={'انستجرام'}
                        FistImage={icons.insta}
                        imagestyle={{ width: 20, height: 20, }}
                        customeStyle={{ width: 158, height: 43 }}
                    />

                    <InputText
                        placeholder={'تويتر'}
                        FistImage={icons.twitter}
                        imagestyle={{ width: 20, height: 20, }}

                        customeStyle={{ width: 158, height: 43, }}
                    />

                </View>

                <View style={{ flexDirection: 'row-reverse', marginBottom: 10, width: 325, justifyContent: 'space-between' }}>

                    <InputText
                        placeholder={'فيسبوك'}
                        FistImage={icons.fb}
                        imagestyle={{ width: 20, height: 20, }}
                        customeStyle={{ width: 158, height: 43 }}
                    />

                    <InputText
                        placeholder={'سناب شات'}
                        FistImage={icons.snapchat}
                        imagestyle={{ width: 20, height: 20, }}

                        customeStyle={{ width: 158, height: 43, }}
                    />

                </View>

                {/* <TouchableOpacity onPress={() => Alert.alert('تم تسجيل الدخول يلا')} style={{ width: 325, height: 46, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 10 }}>
                    <Text>   التسجيل  </Text>

                </TouchableOpacity> */}

                <Btn
                    name={'تسجيل الدخول'}
                    loading={btnLoading}
                    onPress={() => this.setState({ btnLoading: true })} 
                    btnStyle={{width:325, marginTop:20, borderRadius:10 }}
                    onPress={() => Alert.alert('تم تسجيل الدخول يلا')}
                    />

            </Container>


        )
    }


}
const styles = StyleSheet.create({

    touchableOpacitystyle: {
        width: 105,
        height: 105,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 52.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    txtStyle: {

        fontSize: 15,
        color: 'black',
        marginTop: 20,
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        marginBottom:50

    },

})