import React from 'react';
import ReactDOM from 'react-dom';

// function component
const App = () => {
    return (
        <div>
            {/* In jsx we use html for instead of for */}
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            {/* difference betweeen adding styles with html and jsx
            html :
            <button style="color: white; background-color: blue;">
                submit
            </button>
            jsx:
            */}
            <button style={{color: 'white', backgroundColor: 'blue'}}>
                submit
            </button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);