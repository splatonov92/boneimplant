import React from 'react';
import ReactDOM from 'react-dom';

class Left extends React.Component {
    render() {
        return(
            <div className="left-panel">
                <div className="main-title main-background-color">BoneImplant</div>
                <div className="padding-5">
                    <div className="menu-item">DICOM</div>
                    <div className="menu-item">STL</div>
                    <div className="menu-item">Strain</div>
                </div>
            </div>
        );
    }
}

export default Left;