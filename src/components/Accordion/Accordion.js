import React, { useState } from 'react';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }
    
    const formattedItems = items.map((item,index) => {
        const activeContent = index === activeIndex ? 'active':'';
        const activeTitle = activeContent;
        
        return (
            < >
                <div 
                    className={`title ${activeTitle}`}
                    key={index}
                    onClick={() => onTitleClick(index)}
                >
                    <i class="dropdown icon"></i>
                    {item.title}
                </div>
                <div class={`content ${activeContent}`}>
                    <p className="transition visible ">{item.content}</p>
                </div>
            </>
        )
    });

    return (
        <div className="ui styled fluid accordion">{formattedItems}</div>
    );
}

export default Accordion;