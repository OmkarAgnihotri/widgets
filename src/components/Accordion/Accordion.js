import React, { useState } from 'react';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    // onTitleClick = (index) => {
    //     setActiveIndex(index);
    // }
    
    const formattedItems = items.map((item,index) => {
        const activeContent = index === activeIndex ? 'show':'collapse';
        const collapsedButton = index === activeIndex ? '' :'collapsed';
        return (
            <div 
                key={index}
                className="accordion-item"
                onClick={() => setActiveIndex(index)}
            >
                <h2 className="accordion-header" >
                    <button className={`accordion-button ${collapsedButton}` } type="button" >
                        {item.title}
                    </button>
                </h2>
                <div className={`accordion-collapse bg-light ${activeContent}`} >
                    <div className="accordion-body">
                        {item.content}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div classNameName="accordion">{formattedItems}</div>
    );
}

export default Accordion;