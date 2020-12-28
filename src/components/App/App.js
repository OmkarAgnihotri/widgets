import React from 'react';
import Accordion from '../Accordion.js/Accordion';

const items = [
    {
        title : 'What is React?',
        content : 'React is a fron end Js framework'
    },
    {
        title : 'Why use React?',
        content : 'Rect is favorite JS library among engineers'

    },
    {
        title : 'How do you use React?',
        content : 'You use React by creating components'
    }
]

const App = () => {
    return (
        <div className="container">
            <Accordion items={items} />
        </div>
    )
}

export default App;
