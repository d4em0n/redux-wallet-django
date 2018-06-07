import { createStore } from 'redux';
import appReducer from '../reducers/walletReducer'

var initialState = {
    walletItems: [
        {
            id: 0,
            description: 'gaji',
            amount: 200
        },
        {
            id: 1,
            description: 'keperluan',
            amount: -150
        }
    ]
};

//var store = createStore(appReducer, initialState);
var store = createStore(appReducer);

export function getWalletId(itemId) {
    let state = store.getState().walletItems;
    itemId = parseInt(itemId);
    let item = state.filter(({ id }) => id === itemId)[0];
    return item;
}

export function getTotalBudget() {
    let total = 0;
    let state = store.getState().walletItems;
    state.forEach((item) => {
        total += item.amount;
    })
    return total;
}
export default store;
