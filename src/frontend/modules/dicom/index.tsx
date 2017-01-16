import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SourceImagePanel from './sourceImage';
import Toolbox from './toolbox';

class DicomModule extends React.Component<any, any> {
    

    render () {
        return <div>
                <h4> Dicom Module </h4>
                <Toolbox />
                <SourceImagePanel />
            </div>;
    }
}

export default DicomModule;