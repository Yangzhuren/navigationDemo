const url_common = 'http://192.168.1.180:8006/';
const header = {
    'Content-Type':'application/json;charset=UTF-8',
};

class ApiFetch {
    fetch(url,method='GET',params=''){
        if(params){
            return new Promise((resolve,reject)=>{
                fetch(url_common+url,{
                    method,
                    headers:header,
                    body:JSON.stringify(params)
                })
                    .then((response)=>response.json())
                    .then((responseData)=>{
                        resolve(responseData);
                    })
                    .catch((error)=>{
                        reject(error);
                    });
            });
        }else{
            return new Promise((resolve,reject)=>{
                fetch(url_common+url,{
                    method,
                    headers:header,
                })
                    .then((response)=>response.json())
                    .then((responseData)=>{
                        resolve(responseData);
                    })
                    .catch((error)=>{
                        reject(error);
                    });
            });
        }
    }
}

const apiFetch = new ApiFetch();

module.exports = apiFetch;