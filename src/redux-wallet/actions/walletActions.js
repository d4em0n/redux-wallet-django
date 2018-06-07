export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SET_ITEM_STATE = 'SET_ITEM_STATE';
export const ADD_ITEM_ID = 'ADD_ITEM_ID';

export function addNewItem(params) {
    return {
        type: ADD_NEW_ITEM,
        payload: params
    }
}

export function deleteItem(params) {
    return {
        type: DELETE_ITEM,
        payload: params
    }
}

export function editItem(params) {
    return {
        type: EDIT_ITEM,
        payload: params
    }
}

export function setItemState(params) {
    return {
        type: SET_ITEM_STATE,
        payload: params
    }
}

export function addItemId(params) {
    return {
        type: ADD_ITEM_ID,
        payload: params
    }
}
