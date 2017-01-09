import * as express from 'express';

var router = express.Router();
router.use(function timeLog(req, res, next) {
    console.log('Dicom Time: ' + Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('dicom page');
});

export default router;