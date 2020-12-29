import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';


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

const options = [
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Blue',
        value:'blue'
    },
    {
        label:'The color green',
        value:'green'
    }
];

const App = () => {
    const [selected, setSelected ] = useState(options[0])
    return (
        <div className="container">
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    )
}

export default App;
