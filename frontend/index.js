import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import DicomModule from './modules/dicom';
import StlModule from './modules/stl';
import StrainModule from './modules/strain';

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(    
    (<Router history={browserHistory}>
        <Route path="/" component={App} >
            <Route path="dicom" component={DicomModule}/>
      		<Route path="stl" component={StlModule}/>
      		<Route path="strain" component={StrainModule}/>
        </Route>
    </Router>),
    document.getElementById('app')
);
