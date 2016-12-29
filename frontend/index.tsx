import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as App from './app';
import { Router, Route, Link, browserHistory } from 'react-router';
/*
import DicomModule from './modules/dicom';
import StlModule from './modules/stl';
import StrainModule from './modules/strain';

*/
ReactDOM.render((
    <div>12312312</div>
), document.getElementById('app'));

/*
ReactDOM.render(    
    (<Router history={browserHistory}>
        <Route path="/" component={App} >
            <Route path="dicom" component={DicomModule}/>
      		<Route path="stl" component={StlModule}/>
      		<Route path="strain" component={StrainModule}/>
        </Route>
    </Router>),
    document.getElementById('app')
);*/
