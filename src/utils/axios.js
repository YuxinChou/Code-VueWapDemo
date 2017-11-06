/****************************************** */
/* 与fetch原生的支持情况相比，好一些 */
/****************************************** */

import axios from 'axios';
import store from '../store';
import { baseUrl } from '../../config/dev.env';

export default (url = '', data = {}, type = 'GET', method = 'fetch') => {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: baseUrl,
            timeout: 20000 //,
                //headers: { 'authToken': store.getters.token }  //如果后台请求都需要携带的话
        });
        instance({
                url: url,
                method: type,
                params: data
            })
            .then(response => {
                const res = response.data;
                // 50001:token已过期
                // 50002:token非法
                if (res.retCode === "50001" || res.retCode === "50002") {
                    router.push({ path: '/login' })
                    reject(res);
                }
                resolve(res);
            })
            .catch(error => {
                router.push({ path: '/404', query: { error: error } });
                reject(error);
            });
    });
}