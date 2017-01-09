import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Left extends React.Component<any, any> {
    render() {
        return(
            <div className="left-panel">
                <div className="main-title main-background-color">BoneImplant</div>
                <ul className="padding-5">
                    <li className="menu-item">
                        <Link className={this.props.location.pathname === 'dicom' ? 'active' : ''} to="dicom">DICOM</Link>
                    </li>
                    <li className="menu-item"><Link className={this.props.location.pathname === 'stl' ? 'active' : ''} to="stl">STL</Link></li>
                    <li className="menu-item"><Link className={this.props.location.pathname === 'strain' ? 'active' : ''} to="strain">Strain</Link></li>
                </ul>
            </div>
        );
    }
}

export default Left;