var axios = require('axios');

//import prefix  from '../../etc/config.json';
var apiPrefix = 'http://localhost:8080/';

export default {
    add(eventName) {
        return axios.post(apiPrefix + 'add', {'event': eventName});
    },
    checkAuth() {
        return axios.get(apiPrefix + 'info')
    }
}
