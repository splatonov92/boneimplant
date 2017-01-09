import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './dicom.css'; 

interface SourcePanelStates {
    file
}

class SourceImagePanel extends React.Component<any, SourcePanelStates> {
    
    constructor(props: any) {
        super(props);
    }

    onChangeFileHandler(event: React.FormEvent<HTMLInputElement>) {
        console.log(event.currentTarget.value);
        this.setState({file: event.currentTarget.value});
    }

    componentWillMount() {
        this.setState({file: null});
    }

    loadFileToServer() {
        let fd = new FormData();
        fd.append('file', this.state.file);

        fetch('dicom/loadfile', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'multipart/form-data'
            },
            body: fd
        }).then(console.log)
    }
    


    render() {
        return <div className="image-container">
            <h4>Source image panel</h4>
            <img className="image-dist" />
            <p>Load choose image and load to server</p> 
            <input type='file' onChange={this.onChangeFileHandler} />
            <button onClick={this.loadFileToServer}>Upload file</button>
        </div>;
    }
}

export default SourceImagePanel;