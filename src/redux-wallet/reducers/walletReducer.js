import { ADD_NEW_ITEM, DELETE_ITEM, EDIT_ITEM, SET_ITEM_STATE, ADD_ITEM_ID } from '../actions/walletActions';
import { combineReducers } from 'redux';

function walletItems(state = [], action) {
    switch(action.type) {
        case ADD_NEW_ITEM:
            return [
                ...state,
                {
                    id: state.length,
                    amount: action.payload.amount,
                    description: action.payload.description
                }
            ];
        case ADD_ITEM_ID:
            return [
                ...state,
                {
                    id: action.payload.id,
                    amount: action.payload.amount,
                    description: action.payload.description
                }
            ];
        case DELETE_ITEM:
            return state.filter(({ id }) => id !== action.payload.id)
        case EDIT_ITEM:
            return state.map((item) => {
                if(item.id === action.payload.id) {
                    return Object.assign({}, item, {description: action.payload.description, amount: action.payload.amount })
                }
                return item;
            })
        case SET_ITEM_STATE:
            console.log("set item state");
            return action.payload;
        default:
            return state;
    }
}

const appReducer = combineReducers({
    walletItems
});

export default appReducer;
