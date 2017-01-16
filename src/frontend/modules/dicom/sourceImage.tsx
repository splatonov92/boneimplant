import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './dicom.css'; 

interface SourcePanelStates {
    file;
    fileName: string
}

class SourceImagePanel extends React.Component<any, SourcePanelStates> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            file: null,
            fileName: ''
        };
    }

    onChangeFileHandler(event: React.FormEvent<HTMLInputElement>) {
        console.log(event.currentTarget.value);
        this.setState({file: event.currentTarget.value, fileName: "/dicom/loadfile"});
    }

    componentDidMount() {
        this.setState({file: null, fileName: null});
    }

    componentWillMount() {
        this.setState({file: null, fileName: null});
    }

    loadFileToServer = () => {
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
        }).then(() => {
            this.setState({file: null, fileName: ""});
            this.setState({file: null, fileName: "/dicom/loadfile"});
        })
    }
    
    render() {
        return <div className="image-container">
            <h4>Source image panel</h4>
            <img src={this.state.fileName} className="image-dist" />
            <button onClick={this.loadFileToServer}>Load demo image</button>
        </div>;
    }
}

export default SourceImagePanel;