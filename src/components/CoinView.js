import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/Icons';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#90EE90',
      
    },
    image: {
        width: 37,
        height: 37,
        position: 'absolute',
        left: 5
    },
    leftCol: {
        flex: 1.1,
        flexDirection: 'column',
        paddingLeft: 10,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#90EE90',
    },
    rightCol: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 25,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#90EE90',

    },
    centrist: {
        flex: 0.75,
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 7,
        fontFamily: 'monospace'
    },
    leftTexts: {
        position: 'relative', 
        left: 40,
        fontSize: 12,  
        fontFamily: 'monospace'
    },
    rightTexts: {
        fontSize: 12,  
        fontFamily: 'monospace'
    },
    bolds: {
        position: 'relative', 
        left: 40,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    }
  });


const { container,
    image, 
    leftCol,
    rightCol, 
    centrist,
    leftTexts,
    rightTexts,
    bolds } = styles;


const CoinView = (props) => {
    return (
        <View style={container}>
        
            
              
      
            <View style={leftCol}>
                <Image style={image} source={{ uri: images[props.symbol]}} />
                <Text style={bolds}>{props.symbol}</Text>
                <Text style={leftTexts}>{props.coin_name}</Text>                     
            </View>
           
            <Text style={centrist}>{props.price_usd}$</Text>
            
            <View style={rightCol}>
                

             <Text style={rightTexts}>24h: {props.percent_change_24h > 0 && <Text style={{ color: 'green'}}>
                +{props.percent_change_24h}%</Text>}
                
                {props.percent_change_24h < 0 && <Text style={{ color: 'red'}}>
                {props.percent_change_24h}%</Text>}</Text>

                <Text style={rightTexts}>7d: {props.percent_change_7d > 0 && <Text style={{ color: 'green' }}
                >+{props.percent_change_7d}%</Text>}

                {props.percent_change_7d < 0 && <Text style={{ color: 'red' }}>
                {props.percent_change_7d}%</Text>}</Text>
                
            </View>
        </View> 
    )
}




export default CoinView;