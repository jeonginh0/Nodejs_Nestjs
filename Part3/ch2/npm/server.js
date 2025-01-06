const axios = require('axios');

axios.get('https://naver.com')
    .then((response) => {console.log(response)})
    .catch((err) => {console.log(err)})