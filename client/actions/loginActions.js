import api from '../api';

export function sendLogin(email, password, callback) {
    api.sendLogin(email, password).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    });
}

export function passwordStore(value) {
    return {
        type: "PASSWORD_STORE",
        payload: value
    }
}

export function emailStore(value) {
    return {
        type: "EMAIL_STORE",
        payload: value
    }
}