"use strict";

var Jimp = require("jimp");
var express = require("express");
var grayScale = -1;
var router = express.Router(),
    filename = '/home/cork/workspace/boneimplant/backend/test/leg.jpg',
    filename2 = '/home/cork/workspace/boneimplant/backend/test/leg2.jpg';
router.use(function timeLog(req, res, next) {
    console.log('Dicom Time: ' + Date.now());
    next();
});
router.get('/', function (req, res) {
    res.send('dicom page');
});
router.get('/loadfile', function (req, res) {
    res.sendFile(filename2);
});
router.post('/loadfile', function (req, res) {
    grayScale += 0.1;

    if(grayScale > 1)
        grayScale = -1;

    Jimp.read(filename, function (err, lenna) {
        if (err) throw err;
        lenna
        //.resize(256, 256)            // resize
        //.quality(60)                 // set JPEG quality
            .brightness(grayScale)                 // set greyscale
            .write(filename2); // save

        res.sendFile(filename2);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
