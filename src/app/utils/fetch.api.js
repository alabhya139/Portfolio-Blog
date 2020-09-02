export async function get(url) {
    return new Promise(function (resolve, reject) {
        try {
            if (null === url || undefined === url || '' === url) {
                reject('URL not present.');
            } else {
                const options = {
                    method: 'GET'
                };
                fetch(url, options)
                    .then(res => res.status !== 204 && res.json())
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error)
                    });
            }
        } catch (error) {
            reject(error)
        }
    });
}