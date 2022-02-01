const axios = require('axios')

axios.get('https://www.rsvpu.ru')
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("all done!!");
    })