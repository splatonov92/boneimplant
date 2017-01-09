"use strict";
var express = require("express");
var config_1 = require("./config/config");
var dicom_1 = require("./routes/dicom");
var port = config_1.default.port;
var starter = {
    run: function () {
        var app = express();
        app.use(express.static(__dirname + '/../public'));
        app.use('/dicom', dicom_1.default);
        app.listen(port);
        console.log("Server listening at port " + port);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = starter;
