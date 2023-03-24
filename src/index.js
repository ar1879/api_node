import express, { json, urlencoded } from 'express';
import cors from 'cors';
import router from './routes/index.js'
// Routes

const app = express();
app.use(cors());

// middlewares
app.use(json());
app.use(urlencoded({extended: false}));

app.use(router);

const port = process.env.PORT || 3000

app.listen(port);
console.log('Server on port', port);