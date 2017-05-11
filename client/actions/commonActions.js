import api from '../api';

export function authStore(value) {
    return {
        type: "AUTH_STORE",
        payload: value
    }
}

export function checkAuth(callback) {
    api.checkAuth().then(function(data) {
        //console.log('data add action', data)
        
        if(!data.data) {
            callback(false);
        } else {
            callback(data.data);
        }
        
    });
}
