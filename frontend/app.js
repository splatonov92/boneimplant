import React from 'react';
import ReactDOM from 'react-dom';
import Top from './top';
import Left from './left';

class App extends React.Component {
    render() {
        return(
            <div>
                <Top></Top>
                <Left></Left>
            </div>
        );
    }
}

export default App;