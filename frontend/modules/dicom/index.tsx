import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SourceImagePanel from './sourceImage';

class DicomModule extends React.Component<any, any> {
    render () {
        return <div>
                <div> DicomModule </div>
                <SourceImagePanel />
            </div>;
    }
}

export default DicomModule;