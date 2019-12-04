import React, { Component } from 'react'

import { Text, Image, TextInput } from 'react-native'
import { Container, InputText } from '../components/common';
import { images } from '../assets/images';


export class Sign extends Component {

    render() {


        return (
            <Container >


                <InputText
                 placeholder={'الأسم'}
                 
                   img={images.mastercard}
                   imagestyle = {{width :20 , height : 20}}
                    customeStyle={{marginTop:100}}
                    />
                <InputText
                 placeholder={'العنوان '}
                  
                  img={{ uri: 'https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/home-512.png' }}
                  imagestyle = {{width :20 , height : 20}}
                  customeStyle={{marginTop:20}}
                   />
                <InputText placeholder={'رقم الهاتف '}

                 
                  keyboardType={'numeric'}
                   img={{ uri: 'https://cdn.pixabay.com/photo/2016/08/11/16/35/phone-1586126_960_720.png' }} 
                   imagestyle = {{width :20 , height : 20}}
                   customeStyle={{marginTop:20}}
                   />
                <InputText
                 placeholder={'كلمة المرور '}
                 
                   secureTextEntry={true}
                    img={{ uri: 'https://cdn1.iconfinder.com/data/icons/basic-ui-7/100/Artboard_45-512.png' }}
                    imagestyle = {{width :20 , height : 20}}
                    customeStyle={{marginTop:20}}
                    />
                    






            </Container>


        )
    }



}

//img={{uri :'https://cdn.zeplin.io/5cd7722ff07a2167b4e1bb5b/assets/cc8e0fe6-b495-4d96-9d2e-e4cac2b731dd.png'}} 