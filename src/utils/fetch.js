/****************************************** */
/* fetch原生支持较差，如考虑浏览器支持情况，不建议 */
/****************************************** */

import { baseUrl } from '../../config/dev.env';

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            method: type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            cache: "force-cache"
        }
        if (type == 'POST') {
            var params = "";

            // 'Content-Type': 'application/json; charset=utf-8'
            // Json串  JSON.stringify(data)
            // params = JSON.stringify(data);

            // 'Content-Type': 'multipart/form-data'
            // formData拼接
            // var formData = new FormData();
            // for (var name in data) {
            //     formData.append(name, data[name]);
            // }

            // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            // 字符串拼接  "email=aaa&password=xxxxx"
            Object.keys(data).forEach(key => {
                params += key + '=' + data[key] + '&';
            });
            if (params !== '') {
                params = params.substr(0, params.lastIndexOf('&'));
            }

            Object.defineProperty(requestConfig, 'body', {
                value: params
            });
        }

        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            throw new Error(error)
        }

    } else {
        // 非fetch
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }
            let sendData = '';
            if (type == 'POST') {
                // Json串
                // sendData = JSON.stringify(data);

                // 字符串拼接
                Object.keys(data).forEach(key => {
                    sendData += key + '=' + data[key] + '&';
                });
                if (sendData !== '') {
                    sendData = sendData.substr(0, sendData.lastIndexOf('&'));
                }
            }
            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);
            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}