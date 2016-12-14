import React from 'react';
import ReactDOM from 'react-dom';
import Top from './top';
import Left from './left';

class App extends React.Component {
    render() {
        return(
            <div>
                <Top></Top>
                <Left location={this.props.location}></Left>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;