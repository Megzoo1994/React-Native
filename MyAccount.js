import React, { Component } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Container } from '../components/common';
import { images } from '../assets/images';


export class MyAccount extends Component {

    render() {
        const { viewStyle, headText } = styles
        return (
            <Container>
                <View style={viewStyle}>
                    <Image source={images.accImg}
                        style={{ position: 'absolute' }} />
                    <Text style={headText}>
                        حسابي
                         </Text>
                         <Text style={[headText , {marginTop:130} ]} >
                        هنا وصف مصغر للصفحة
                         </Text>
                </View>
            </Container>
        )
    }
}












const styles = StyleSheet.create({

    viewStyle:
    {
        width: '100%',
        height: 200,
        position: 'absolute',
    },
    headText: {
        marginTop:100,
        marginRight:10,
        fontSize:15,
        color:'white',
        fontWeight:'bold'

    },
})
