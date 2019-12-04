import React, { Component } from 'react'

import { Text, View, FlatList, StyleSheet, Image } from 'react-native'

export class ShopzHome extends Component {

    render() {
        const { ViewHeadStyle, IconsStyle, } = styles
        return (

            
            <View style={ViewHeadStyle}>

                <Image
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' }}
                    style={IconsStyle}
                />

                <Image
                    source={{ uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/price_tag-512.png' }}
                    style={IconsStyle}
                />
                <View style={{ alignItems: 'flex-end', flexDirection: 'row', marginLeft: 160 }}>
                    <Image
                        source={{ uri: 'https://icon-library.net/images/favorite-icon/favorite-icon-0.jpg' }}
                        style={IconsStyle}
                    />

                    <Image
                        source={{ uri: 'https://image.flaticon.com/icons/png/512/126/126083.png' }}
                        style={IconsStyle}
                    />

                    <Image
                        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png' }}
                        style={IconsStyle}
                    />



                </View>

            </View>

           

           

        )
    }

}

const styles = StyleSheet.create({
    ViewHeadStyle: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        
        alignItems: 'center',
        flexDirection: 'row',

    },

    IconsStyle: {

        width: 25,
        height: 25,
        tintColor: 'white',
        marginLeft: 10

    },
  
    
    

})


