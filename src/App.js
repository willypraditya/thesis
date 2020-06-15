import React, { Component } from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import RouterFlow from './components/Router/Router';

class App extends Component {
    render() {
        return (
            <div>
                <RouterFlow />
            </div>
        );
    };
}

export default App;
