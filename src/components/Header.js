import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    headerContainer: {
      display: "flex",
      marginTop: 55,
      marginBottom: 20,
      alignItems: "center",
    },
    header: {
        fontFamily: 'monospace',
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'center',

    },

  });

const { headerContainer, header, headerColumn } = styles;


const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Cryptotracker</Text>
        </View>
       

    )
}


export default Header;