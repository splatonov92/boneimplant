import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from "./app";
import StlModule from './modules/stl';
import DicomModule from './modules/dicom/index';
import StrainModule from './modules/strain';

ReactDOM.render(    
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="dicom" component={DicomModule}/>
      		<Route path="stl" component={StlModule}/>
      		<Route path="strain" component={StrainModule}/>
        </Route>
    </Router>),
    document.getElementById('app')
);
