"use strict";
var express = require("express");
var filename = '../test/leg.jpg', router = express.Router(), grayScale = 50;
router.use(function timeLog(req, res, next) {
    console.log('Dicom Time: ' + Date.now());
    next();
});
router.get('/', function (req, res) {
    res.send('dicom page');
});
router.get('/loadfile', function (req, res) {
    res.sendFile(filename);
});
router.post('/loadfile', function (req, res) {
    res.sendFile(filename);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
