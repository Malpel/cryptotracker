import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/Icons';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        flex: 1,
        flexDirection: 'row',

    },
    bold: {
        fontWeight: 'bold'
    },
    image: {
        width:40,
        height: 40,
    },
    upper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    lower: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    rightCol: {
        flex: 1,
        flexDirection: 'row'
    }
  });


const { container, image, bold, upper, lower, rightCol } = styles;


const CoinView = (props) => {
    return (
        <View style={container}>
           <Image style={image} source={{ uri: images[props.symbol]}} />
            
                
            <View style={upper}>
            
                <Text style={bold}>{props.coin_name} {props.symbol}</Text>
                <Text style={rightCol}>Coin value: {props.price_usd}$</Text>
                
            </View>
            <View style={lower}>
                

                <Text>Change 24h: {props.percent_change_24h > 0 && <Text style={{ color: 'green'}}>
                +{props.percent_change_24h}%</Text>}
                
                {props.percent_change_24h < 0 && <Text style={{ color: 'red'}}>
                {props.percent_change_24h}%</Text>}</Text>

                <Text style={rightCol}>Change 7d: {props.percent_change_7d > 0 && <Text style={{ color: 'green' }}
                >+{props.percent_change_7d}%</Text>}

                {props.percent_change_7d < 0 && <Text style={{ color: 'red' }}>
                {props.percent_change_7d}%</Text>}</Text>
                
            </View>
        </View> 
    )
}




export default CoinView;