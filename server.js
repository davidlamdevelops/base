import express from 'express';
import parrot from 'parrot-middleware';
import scenarios from './scenarios.js';

const app = express();

app.use(parrot(scenarios));

app.listen(3001);