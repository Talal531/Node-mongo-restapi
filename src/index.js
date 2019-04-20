/* eslint-disable no-console */
import express from 'express';
import constants from './config/constant';
import './config/database';
import middlewareConfig from './config/middleware';

const app = express();

middlewareConfig(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(`
        Server running on port: ${constants.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great
        `);
    }
});
