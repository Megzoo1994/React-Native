import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  render () {
    const {
      touchableOpacityfirst,
      firstStyle,
      viewTouch,
      touchableOpacitySecond,
    } = styles;

    return (
      <View>
        <View style={{ backgroundColor: "#222222", height: 100, alignItems: 'center', flexDirection: 'row', width: "100%" }}>
          <View>
            <Image
              style={{ width: 50, height: 20 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4CSfVQBlv7B0_kSE9_z_v6vg-kmGeYk6KOys3Nke_eB32mXhhw&s' }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 250 }}>
            <Image
              style={{ width: 30, height: 20, tintColor: 'white' }}
              source={{ uri: 'https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png' }}
            />
            <Image
              style={{ width: 30, height: 20, tintColor: 'white' }}
              source={{ uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png' }}
            />
          </View>
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 150 }}
            source={{ uri: 'https://4.top4top.net/p_1433dj2g51.jpg' }}
          />
        </View>
        <View>
          <FlatList
            data={inputData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 180,
                    height: 100,
                  }}>
                  <TouchableOpacity
                    style={
                      styles.touchableOpacityfirst
                    }>
                    <Text>
                      {item.img}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
const inputData = [
  {
    img: 'elabd',
  },
  {
    img: 'elabd',
  },
  {
    img: 'elabd',
  },
  {
    img: 'elabd',
  },
  {
    img: 'elabd',
  },
  {
    img: 'elabd',
  },
]
const styles = StyleSheet.create({
  touchableOpacityfirst: {
    width: 67,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
  },

});
