import * as express from 'express';
import {Request, Response} from 'express';
import * as Jimp from 'jimp';
import * as path from 'path';

let
    filename = __dirname + '/../test/leg.jpg',
    router = express.Router(),
    grayScale = 50;

router.use(function timeLog(req, res, next) {
    console.log('Dicom Time: ' + Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('dicom page');
});

router.get('/loadfile', function(req, res) {
    res.sendFile(path.resolve(filename));
});

router.post('/loadfile', function(req: Request, res: Response) {
    res.sendFile(path.resolve(filename));
});

export default router;
