import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './index.css'

class App extends React.Component {
    // simplified state initialization (thanks to babel)
    state = { 
        latitude: null,
        errorMessage: ''
    };

    componentDidMount() {
        // best practise is to put data loading here intead of constructor
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage:  err.message}),

            console.log('loading')
        );
    } 

    componentDidUpdate() {
        console.log('Component is updated - it was rerendered!');
    }

    render () {  
        return (
            <div className="app">
                { 
                    this.state.latitude ? 
                        <SeasonDisplay latitude={this.state.latitude}/> :

                    this.state.errorMessage ? 
                        <div className="errorWrapper">
                            {`Error message: ${this.state.errorMessage}`}
                        </div> :
                        
                    <Spinner message="Please accept location request"/>
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

