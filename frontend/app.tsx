import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Top from './top';
import Left from './left';

class App extends React.Component<any, any> {
    render() {
        return(
            <div>
                <Top />
                <Left location={location}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;