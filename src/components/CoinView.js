import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/Icons';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        borderBottomWidth: 1
    },
    bold: {
        fontWeight: 'bold'
    },
    image: {
        width:40,
        height: 40
    },
  });


const CoinView = (props) => {
    return (
        <View style={container}>
            <Image style={image} source={{ uri: images[props.symbol]}} />
            <Text style={bold}>{props.coin_name}</Text>
            
            <Text>Current value: {props.price_usd}$</Text>
            
            <Text>Change 24h: {props.percent_change_24h > 0 && <Text style={{ color: 'green'}}>
            +{props.percent_change_24h}%</Text>}
            
            {props.percent_change_24h < 0 && <Text style={{ color: 'red'}}>
            {props.percent_change_24h}%</Text>}</Text>

            <Text>Change 7d: {props.percent_change_7d > 0 && <Text style={{ color: 'green' }}
            >+{props.percent_change_7d}%</Text>}

            {props.percent_change_7d < 0 && <Text style={{ color: 'red' }}>
            {props.percent_change_7d}%</Text>}</Text>

        </View>
    )
}

const { container, image, bold} = styles;


export default CoinView;