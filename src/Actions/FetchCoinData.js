import axios from 'axios';
import { FETCHING_COIN_DATA, 
    FETCHING_COIN_DATA_SUCCESS, 
    FETCHING_COIN_DATA_FAILURE 
} from './../Utils/ActionTypes';


const apiBaseUrl = 'https://api.coinmarketcap.com/';


// this is a thunk action
export default function fetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(apiBaseUrl + 'v1/ticker/bitcoin/')
            .then((response) =>  {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: FETCHING_COIN_DATA_FAILURE, payload: error.data })
            });
    }
}