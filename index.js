const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send('Hello Developer');
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));

connect();
app.listen(PORT, () => {
   console.log(`Server is listening on port {PORT}`)
})
