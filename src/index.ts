import express  from 'express';
import cors from 'cors';
import routes from './routes/index.routes';
import { MongoConnection } from './database/MongoConnection'
const app = express();

const database = new MongoConnection();

database.connect().then(() => app.emit("connected"));

app.use(cors())
app.use(express.json());
app.use(routes);

app.on('connected', () => app.listen(3333));

