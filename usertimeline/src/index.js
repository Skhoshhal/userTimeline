import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';
import 'font-awesome/css/font-awesome.css';

const Activities = [
     {
         timestamp: new Date().getTime(),
         text: "Hi!",
         user: {
             id: 1, name: 'Nate',
             avatar: "http://www.croop.cl/UI/twitter/images/russel.jpg"
         },
         comments: [{ from: 'Ari', text: 'Me too!' }]
     },
     {
         timestamp: new Date().getTime(),
         text: "Hey!",
         user: {
             id: 2, name: 'Ari',
             avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
         },
         comments: [{ from: 'Nate', text: 'I am so jealous' }]
     },
    {
        timestamp: new Date().getTime(),
        text: "Where are you ?",
        user: {
            id: 1, name: 'Nate',
            avatar: "http://www.croop.cl/UI/twitter/images/russel.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "At home",
        user: {
            id: 2, name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
 ]


export const load = () => {
    ReactDOM.render(
        <Container
            Activities={Activities}
        />,
        document.getElementById('demo1')
    );
}
try {
    setTimeout(load, 100)
} catch(e) {
    console.log('e ->', e)
}

