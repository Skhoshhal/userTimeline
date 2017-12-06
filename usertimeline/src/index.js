import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container';
import 'font-awesome/css/font-awesome.css';

export const load = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('demo1')
    );
}
try {
    setTimeout(load, 100)
} catch(e) {
    console.log('e ->', e)
}

