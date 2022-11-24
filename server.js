require('dotenv').config()
const express = require('express');
const apiRouter = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.listen(process.env.PORT || '3001', () => {
    console.log(`Backend is running ${process.env.PORT || '3001'}`);
});