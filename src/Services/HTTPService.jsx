import axios from 'axios';
import Constants from '../ServerConstants';

const responseModel = {
    status: 0,
    data: ''
};

const instance = axios.create({
    baseURL: Constants.fetchPosts
});

instance.interceptors.request.use(function (config) {
    instance.defaults.headers.common['Authorization'] = localStorage.getItem('keyToken');
    return config;
}, function (error) {
    console.log('Error in request interceptor : ' + JSON.stringify(error));
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    responseModel.status = response.status;
    responseModel.data = response.data;
    console.log('Success responseModel : ', responseModel);
    if (response.status !== 200) {
        return Promise.reject(responseModel);
    }
    return responseModel;
}, function (error) {
    responseModel.status = error.response.status;
    responseModel.data = error.response.data;
    console.log('Error responseModel : ', responseModel);
    return Promise.reject(responseModel);
});

const HTTPService = {
    getRequest,
    postRequest
};

export default HTTPService;

function getRequest(url) {
    return instance.get(url)
        .then(response => {
            return response
        })
        .catch(function (error) {
            return error
        });
}

function postRequest(url, data) {
    return instance.post(url, data)
        .then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
}
