// const url_common = 'http://192.168.1.180:8006/';
const url_common = 'http://localhost:8080/';
const header = {
    'Content-Type':'application/json;charset=UTF-8',
};
const timeout = 30000;

class ApiFetch {
    fetch(url,method='GET',params=''){
        const timerPromise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject(new Error('request timeout'));
            },timeout);
        });
        let requestPromise = null;
        if(params){
            requestPromise = new Promise((resolve,reject)=>{
                fetch(url_common+url,{
                    method,
                    headers:header,
                    body:JSON.stringify(params)
                })
                    .then((response)=>{
                        try{
                            return response.json();
                        }catch(e){
                            return response;
                        }   
                    })
                    .then((responseData)=>{
                        resolve(responseData);
                    })
                    .catch((error)=>{
                        reject(error);
                    });
            });
        }else{
            requestPromise = new Promise((resolve,reject)=>{
                fetch(url_common+url,{
                    method,
                    headers:header,
                })
                    .then((response)=>{
                        try{
                            return response.json();
                        }catch(e){
                            return response;
                        }
                    })
                    .then((responseData)=>{
                        resolve(responseData);
                    })
                    .catch((error)=>{
                        reject(error);
                    });
            });
        }
        return Promise.race([requestPromise,timerPromise]);
    }
}

const apiFetch = new ApiFetch();

module.exports = apiFetch;