const fetch = require("node-fetch")

const fetchResponseHandling = (url) => {
    return fetch(url)
    .catch(error => {throw error})
    .then((res) => {
        if(res.status >= 200 && res.status <= 300){ 
            return res.text().then(body => JSON.parse(body))
        }
        if(res.status >= 400){
            const e = new Error(res.statusText) 
            e.status = res.status
            throw e;
        }
    })
}


exports.fetchResponseHandling = fetchResponseHandling;

