import "reflect-metadata";
import { apiRoute } from './routes'
import * as express from 'express';
import { json } from 'body-parser';
import * as dotenv from 'dotenv';

const path = require('path');
const file = path.join(__dirname, '..', `./.env${process.env.ENVIRONMENT ? '.' + process.env.ENVIRONMENT : ''}`);
dotenv.config({ path: file});

const app = express();
app.use(json());
app.use(apiRoute)

app.listen(process.env.PORT, () => console.log("Listening on Port", process.env.PORT));
