import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import db from '../models';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './utils/swaggerOptions';
import path from 'path';
import routes from './routes';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const swaggerSpecs = swaggerJsDoc(options);

app.use(cors());
app.use(express.json());

app.use('/lionmane/dogs-breeds/v1', routes);
app.use('/lionmane/dogs-breeds/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})

export { app }
