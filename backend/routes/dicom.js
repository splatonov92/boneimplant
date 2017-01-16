"use strict";
var path = require('path');
var express = require("express");
var filename = __dirname + '/../test/leg.jpg', router = express.Router(), grayScale = 50;
router.use(function timeLog(req, res, next) {
    console.log('Dicom Time: ' + Date.now());
    console.log(__dirname);
    next();
});
router.get('/', function (req, res) {
    res.send('dicom page');
});
router.get('/loadfile', function (req, res) {
    res.sendFile(path.resolve(filename));
});
router.post('/loadfile', function (req, res) {
    res.sendFile(path.resolve(filename));
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
