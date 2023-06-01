const express = require('express');
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');


const app = express();

 dotenv.config({ path: "./config.env" });
 require('./DB/conn');
const userRouter = require('./router/route');
 const PORT = process.env.PORT;

app.use(express.json())


// Mount user router
app.use('/api/v3/app/users',userRouter);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
