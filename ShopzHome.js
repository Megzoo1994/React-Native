import React, { Component } from 'react'

import { Text, View, FlatList, StyleSheet, Image ,TouchableOpacity } from 'react-native'
import { icons } from '../assets/icons';

export class ShopzHome extends Component {

    render() {
        const { ViewHeadStyle, IconsStyle, SliderStyle , touchbalOpacitySeconde} = styles
        return (

            <View>
            <View style={ViewHeadStyle}>

                <Image
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' }}
                    style={IconsStyle}
                />

                <Image
                    source={{ uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/price_tag-512.png' }}
                    style={IconsStyle}
                />
                <View style={{ alignItems: 'flex-end', flexDirection: 'row', marginLeft: 200 }}>
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

            <View 
                 >
            <Image  source ={{uri:"http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg"}}
            style={{width:"100%" , height:200}} />

            </View>


            <FlatList
                    numColumns={2}
                    data={inputData}
                    showsVerticalScrollIndicator={false}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 180, height: 150, marginBottom: 5 , marginTop:20 }}>
                                <TouchableOpacity style={touchbalOpacitySeconde}>
                                    <Image source={item.img} style={{ width: 80, height: 80 }} />
                                </TouchableOpacity>
                            </View>

                        )
                    }

                    }

                />





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

        width: 20,
        height: 20,
        tintColor: 'white',
        marginLeft: 10

    },

    SliderStyle :{
         width:"100%",
         height : 200,
         backgroundColor:'black'

    },


    touchbalOpacitySeconde :{
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
        
        img: icons.shoe
    },
    {
        
        img: icons.drss
    },
    
    {
        
        img: icons.shoe
    },
    {
        
        img: icons.drss
    },
    
       
 
]


