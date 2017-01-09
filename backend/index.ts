import * as express from 'express';
import config from './config/config';
import dicomrouter from './routes/dicom';

var port = config.port;

var starter = {
    run: function () {
        var app = express();
        app.use(express.static(__dirname + '/../public'));
        app.use('/dicom', dicomrouter);
        app.listen(port);
        console.log(`Server listening at port ${port}`);

    }
}

export default starter;
