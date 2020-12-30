import React from 'react';

const Dropdown = ({options,selected, onSelectedChange}) => {

    const renderedOptions = options.map((option,index) => {

        
        if(selected.value === option.value){
        
            return null;
        }

        return (
            <option 
                key={option.value}
                onClick={()=>onSelectedChange(option)}
            >
                {option.label}
            </option>
        );
    });

    return (
        <form>
            <div className="form-group p-2">
                <select className="form-control">
                    <option >{selected.label}</option>
                    {renderedOptions}
                </select>
            </div>

        </form>
        
    );
}

export default Dropdown;