import React, { Component } from 'react'
import { FlatList, View, Image, TextInput, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Container, InputText } from '../components/common';
import { images } from '../assets/images';
import { icons } from '../assets/icons';
export class Cat extends Component {

    render() {

        const { viewStyle, headText, viewTitleHead, touchblaOpacityFirst, flatListViewStyle, touchbalOpacitySeconde } = styles
        return (
            <Container>


                <View style={viewStyle}></View>
                {/* <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/superglyph-alignment/30/sort-down-512.png' }}
                        style={{ width: 20, height: 20, marginRight: 20 }} /> */}
                {/* <View
                    style={viewTitleHead}>
                    <Text style={headText}>
                        إسم القسم </Text>
                </View>
                <View>
                    <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-left-512.png' }}
                        style={{ width: 20, height: 20 }} />
                </View> */}


                {/* first FlatList  */}
                <View style={{ height: 50, borderRadius: 15, backgroundColor: 'white', width: 350, marginVertical: 40, alignSelf: 'center' }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        inverted
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={inputData}
                        horizontal
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={touchblaOpacityFirst}>
                                    <Text style={{ fontSize: 11, color: 'black' }}>{item.name} </Text>
                                </TouchableOpacity>


                            )
                        }

                        }

                    />

                </View>
                {/* seconde FlatList  */}
                <FlatList
                    numColumns={2}
                    data={inputData}
                    showsVerticalScrollIndicator={false}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 180, height: 150, marginBottom: 5 }}>
                                <TouchableOpacity style={touchbalOpacitySeconde}>
                                    <Image source={item.img} style={{ width: 80, height: 80 }} />
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

    viewStyle:
    {
        backgroundColor: '#F5BF1F',
        width: 365,
        height: 200,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',
    },
    headText:
    {
        fontSize: 20,
        textDecorationStyle: 'solid',
        fontWeight: '200'
    },
    viewTitleHead:
    {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300
    },
    touchblaOpacityFirst:
    {
        width: 67,
        height: 28,
        borderWidth: .5,
        borderColor: 'black',
        borderRadius: 3,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',


    },
    flatListViewStyle:
    {
        width: 320,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginRight: 45,
        borderRadius: 5,
    },
    touchbalOpacitySeconde: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const inputData = [


    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.snapchat
    },
    {
        name: 'القسم',
        img: icons.twitter
    },
    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.location
    },
    {
        name: 'القسم',
        img: icons.location
    },
]