import express from 'express';
import cors from 'cors';
import codesRouter from './routers/codes';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/messages', codesRouter);

const run =async () => {
    app.listen(port, () => {
        console.log('Server started on port ' + port + ' !');
    });
};

run().catch(console.error);
