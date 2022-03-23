import express from 'express';
import resizeIMG from '../utilities/resize';
import path from 'path';
import fileExists from '../utilities';

const resize = async (req: express.Request, res: express.Response) => {
    const { name, width, height } = req.query;
    const img = (path.resolve('./assets') + `/${name}.jpg`) as any;
    const result = `assets/output/${name}_width${width}_height${height}.png`;
    try {
        if (!fileExists(img)) {
            return res.status(404).send('Image Not Exists');
        }
        // Check If Height Is Not NAN And Is Number
        if (
            !width ||
            !height ||
            isNaN(Number(width)) ||
            isNaN(Number(height))
        ) {
            return res
                .status(404)
                .send('Make Sure Width And Height Are Number');
        }
        if (fileExists(path.resolve('/') + result)) {
            return res.status(200).sendFile(path.resolve('/') + result);
        } else {
            await resizeIMG(img, result, Number(width), Number(height));
            return res.status(200).sendFile(path.resolve('./') + '/' + result);
        }
    } catch (err) {
        console.log(err);
    }
};

export default resize;
