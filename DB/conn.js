const mongoose = require('mongoose');


const DB = process.env.DATABASE;


mongoose.connect(DB).then(() => {
    console.log('connection succesfull')
}).catch((error) => {
    console.log('no connection', error)
})




// gaikwadrushikesh2505
// pGBwvMXN4NETvGIV

