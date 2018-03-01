import axios from 'axios';

const apiBaseUrl = 'https://api.coinmarketcap.com';

// this is a thunk action
export default function fetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })
    }
}