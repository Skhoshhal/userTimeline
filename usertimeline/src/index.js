import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timeline from './Components/Timeline/Timeline';

export const load = () => {
    ReactDOM.render(
        <Timeline />,
        document.getElementById('demo1')
    );
}
try {
    setTimeout(load, 100)
} catch(e) {
    console.log('e ->', e)
}

