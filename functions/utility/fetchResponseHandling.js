const fetch = require("node-fetch")

const fetchResponseHandling = (url, retryAttempts = 3) => {
    return fetch(url)
    .catch(error => {throw error})
    .then((res) => {
        if(res.status == 200){ //success case
            return res.text().then(body => JSON.parse(body))
        }
        
        if(retryAttempts > 0){ //after 3 retrys code will throw error
            switch(res.status){
                case 429:
                    console.log("retrying...")
                    return new Promise((resolve) => {
                        console.log(`retry successful after: ${res.headers.get("retry-after")} seconds`)
                        setTimeout(() => resolve(fetchResponseHandling(url), retryAttempts-1), res.headers.get("retry-after") * 1000);
                    })
                case 404:
                    
                    return fetchResponseHandling(url, retryAttempts-1)
                case 401:
                    const e = new Error(res.statusText)
                    e.status = res.status
                    throw e
                default:
                    return fetchResponseHandling(url, retryAttempts-1)
            }
        } else { //error case
            const e = new Error(res.statusText) 
            e.status = res.status
            throw e;
        }
        
    })
}


exports.fetchResponseHandling = fetchResponseHandling;

