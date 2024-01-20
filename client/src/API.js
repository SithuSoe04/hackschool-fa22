import axios from 'axios';

const serverURL = 'http://localhost:8000';

const API = {
    getPurchase: function() {
        return axios.get(`${serverURL}/api/purchases`);
    },
    createPurchase: function(purchase){
        return axios.post(`${serverURL}/api/purchases`, purchase);
    }
}
export default API;