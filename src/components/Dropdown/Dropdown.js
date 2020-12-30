import React from 'react';

const Dropdown = ({options,selected, onSelectedChange,label}) => {

    const renderedOptions = options.map((option,index) => {

        
        if(selected.value === option.value){
            return null;
        }

        return (
            <option 
                key={option.value}
                value={option.value}
            >
                {option.label}
            </option>
        );
    });

    const onOptionSelect = (value) => {
        for(let i = 0;i < options.length;i++){
            if(options[i].value === value){
                onSelectedChange(options[i]);
                return;
            }
        }
    }

    // console.log(selected);
    return (
        <form>
            <div className="form-group">
                <label for='dropdown'>{label}</label>
                <select className="form-control" id='dropdown' onChange={(event) => onOptionSelect(event.target.value)}>
                    <option value={selected.value} >{selected.label}</option>
                    {renderedOptions}
                </select>
            </div>

        </form>
        
    );
}

export default Dropdown;