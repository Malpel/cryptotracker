import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinView from './CoinView';


class CryptoContainer extends Component {    
    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinView() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) =>
            <CoinView 
                key={index}
                symbol={coin.symbol}
                coin_name={coin.name}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }

    render() {
        const { crypto } = this.props;
        return (
            <View>
                {this.renderCoinView()}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)