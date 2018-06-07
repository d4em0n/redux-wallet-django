import axios from 'axios';

export const URL = ""
export function getAllWallet() {
    const wallet = URL + "/wallet";
    return axios.get(wallet).then(response => {
        let data = response.data;
        data.map((item) => {
            item.amount = parseInt(item.amount);
        });
        return data;
    });
}

export function postWallet(desc, amount) {
    const wallet = URL + "/wallet";
    let data = {
        description: desc,
        amount: amount
    }
    return axios.post(wallet, data).then(response => {
        let item = response.data;
        item.amount = parseInt(item.amount);
        return item;
    })
}

export function deleteWallet(id) {
    const delWallet = URL + '/' + id + '/wallet';
    return axios.delete(delWallet).then(response => {
        return id;
    })
}

export function editWallet(id, desc, amount) {
    const editUrl = URL + '/' + id + '/wallet';
    let data = {
        description: desc,
        amount: amount
    }
    return axios.put(editUrl, data).then(response => {
        let item = response.data;
        item.amount = parseInt(item.amount);
        return item;
    })
}
