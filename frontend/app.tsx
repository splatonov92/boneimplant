import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import Top from './top';
//import Left from './left';

class App extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;