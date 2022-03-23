import express from 'express';
import resize from '../modules';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('<h1 style=text-align:center>📢 - Image Processing API<h1>');
});

router.get('/images?', resize);

export default router;
