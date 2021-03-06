import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './dicom.css';
import './../../css/general.css';


class ToolboxProps {
    public grayscale: boolean;
}

class ToolboxState {
    public grayscale: boolean = false;
    public brightness: number = 0; 
    public contrast: number = 0;
    public gaussian: number = 0;
    public blur: number = 0;
}

class Toolbox extends React.Component<ToolboxProps, ToolboxState> {
    constructor(props) {
        super(props);
        this.state = new ToolboxState();
        this.handleChangeGrayscale = this.handleChangeGrayscale.bind(this);
        this.handleChangeBrightness = this.handleChangeBrightness.bind(this);
        this.handleChangeContrast = this.handleChangeContrast.bind(this);
        this.handleChangeGaussian = this.handleChangeGaussian.bind(this);
        this.handleChangeBlur = this.handleChangeBlur.bind(this);
    }

    handleChangeGrayscale(event: React.SyntheticEvent<any>) {
        let state = this.state;
        state.grayscale = event.currentTarget.value;
        this.setState(state);
    }

    handleChangeBrightness(event: React.SyntheticEvent<any>) {
        let state = this.state;
        state.brightness = event.currentTarget.value;
        this.setState(state);
    }

    handleChangeContrast(event) {
        let state = this.state;
        state.contrast = event.currentTarget.value;
        this.setState(state);
    }

    handleChangeGaussian(event) {
        let state = this.state;
        state.gaussian = event.currentTarget.value;
        this.setState(state);
    }

    handleChangeBlur(event) {
        let state = this.state;
        state.blur = event.currentTarget.value;
        this.setState(state);
    }

    render() {
        return (<div className="inline">
            Toolbox
            <div className="inline">
                <div>
                    <div className="em10 right inline-block">Grayscale:</div>
                    <input type="checkbox" onChange={this.handleChangeGrayscale}/>
                </div>
                <div>
                    <div className="em10 right inline-block">Brightness:</div>
                    <input type="number" 
                        step="any"
                        className="number" 
                        value={this.state.brightness} 
                        onChange={this.handleChangeBrightness}/>
                </div>
                <div>
                    <div className="em10 right inline-block">Contrast:</div>
                    <input type="number" 
                        step="any"
                        className="number" 
                        value={this.state.contrast} onChange={this.handleChangeContrast}/>
                </div>
                <div>
                    <div className="em10 right inline-block">Gaussian:</div>
                    <input type="number" 
                        step="any"
                        className="number" 
                        value={this.state.gaussian} onChange={this.handleChangeGaussian}/>
                </div>
                <div>
                    <div className="em10 right inline-block">Blur:</div>
                    <input type="number" 
                        step="any"
                        className="number" 
                        value={this.state.blur} onChange={this.handleChangeBlur}/>
                </div>
            </div>
        </div>)
    }
}

export default Toolbox;