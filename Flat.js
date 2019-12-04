import React, { Component } from 'react'
import { FlatList, View, Image, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, InputText } from '../components/common';
import { images } from '../assets/images';
import { icons } from '../assets/icons';
export class Flat extends Component {

    render() {
        const { viewStyle } = styles
        return (
            <Container>
                <View style={viewStyle}>

                </View>
                <Image source={images.headimg}
                    style={{ width: 300, height: 200, marginLeft: 33, marginTop: 45, borderRadius: 20 ,marginBottom:20}} />



                <View style={{ height: 100  }}>


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        inverted
                        contentContainerStyle={{paddingHorizontal:20}}
                        data={inputData}
                        horizontal
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            const {name,img} =item
                            return (

                                <TouchableOpacity  style={{alignItems:'center',marginLeft:5}}>
                                    <View style=
                                        {{
                                            width: 75, height: 75,
                                            borderColor: '#e5e5e5', borderRadius: 37.5,
                                            borderWidth: 1, justifyContent: 'center', alignItems: 'center',
                                            marginBottom:5
                                        }}>
                                        <Image
                                            source={img}
                                            style={{ width: 35, height: 35 }} />
                                    </View>
                                    <Text
                                        style={{ fontSize: 11, color: 'black' }}>
                                        {name} 
                                        </Text>
                                </TouchableOpacity>
                            )
                        }

                        }

                    />
                </View>
                <View style={{ width: 350, height: 20, alignItems: 'flex-end', marginRight: 50 }}>
                    <Text style={{ fontSize: 20, textAlign: 'right' }}> شركاء النجاح </Text>

                </View>

                {/* second flat list */}

                <FlatList

                    data={secondInputData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    inverted
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
                                <TouchableOpacity style={{ width: 150, height: 150, borderWidth: 1, borderColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ borderWidth: 1, borderColor: '#e5e5e5', width: 75, height: 75, borderRadius: 37.5, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={item.img} style={{ width: 35, height: 35 }} />
                                    </View>


                                    <View>
                                        <Text
                                            style={{ fontSize: 15, color: 'black', fontStyle: 'italic', textAlign: 'center', marginTop: 5, width: 100 }}>
                                            {item.name} </Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        )
                    }

                    }




                />


            </Container>


        )
    }
}
const styles = StyleSheet.create({

    viewStyle: {
        backgroundColor: '#e5e5e5',
        width: 365,
        height: 200,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',


    }
})

const inputData = [

    {
        name: 'اسم القسم',
        img: icons.location
    },

    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
    {
        name: 'اسم القسم',
        img: icons.location
    },
]

const secondInputData = [

    {
        name: 'اسم التاجر',
        img: icons.snapchat
    },
    {
        name: 'اسم التاجر',
        img: icons.snapchat
    },
    {
        name: 'اسم التاجر',
        img: icons.snapchat
    },
    {
        name: 'اسم التاجر',
        img: icons.snapchat
    },
    {
        name: 'اسم التاجر',
        img: icons.snapchat
    },
]
