const yelpKey = '3h2feWnVab74tVnUXio-Zn1kveRahhyUwuyrN3KvyPIHkhXwdackYJi540lq4Im6rv5LMzg_e6f-FdTtUZQqdpOhuJTgBlRn4wBAgwY-rpW2QH8YuHJAW7Ps5EOwX3Yx';
const request = (url, type="GET", send, body=null, defaultValue={}, format='json') => {
    body = body ? { body: JSON.stringify(body) } : {};
    fetch(
        url,
        { 
            method: type, 
            ...body,
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + yelpKey
            }
        }
    )
        .then(res => {
            if (format === 'json') {
                return res.json();
            } else {
                return res.text();
            };
        })
        .then(response => { 
            send(response);
        })
        .catch(err => {
            console.log(JSON.stringify(err));
            send(defaultValue);
        });
};

export default request;