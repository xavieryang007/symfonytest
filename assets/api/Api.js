import axios from 'axios';

var baseurl = "http://127.0.0.1:8000";

axios.defaults.baseURL = baseurl;
export default {
    login(params, callback) {
        axios.post('/admin/login', params)
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    checkUrl(url, callback) {
        axios.get('/admin/checkurl?url=' + url, {headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    getList(page, callback) {
        axios.get('/admin/article/' + page + "/2", {headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    if (response.status == 200) {
                        let data = response.data.data.lists;
                        for (let i = 0; i < data.length; i++) {
                            data[i].status = data[i].status == 1 ? true : false;
                        }
                        response.data.data.lists = data;
                    }
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    delete(id, callback) {
        axios.delete('/admin/article/' + id, {headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    add(params, callback) {
        axios.post('/admin/article/', params,{ headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    update(id,params, callback) {
        axios.post('/admin/article/'+id, params,{ headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    get(id, callback){
        axios.get('/admin/article/' + id, {headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    enable(id){
        axios.put('/admin/article/'+id , {},{headers: {'token': this.token()}})
            .then(function (response) {
                if (typeof callback == "function") {
                    callback(response);
                }
            })
            .catch(function (error) {
                if (typeof callback == "function") {
                    callback(error);
                }
            })
    },
    token() {
        return localStorage.getItem("token")
    }
};