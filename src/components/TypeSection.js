import React from 'react';
import './TypeSection.css';

const TypeSection = (props) => {
    return(
        <div className="main__section">
            <div className={`section__type ${(props.active) && "section__type__active"} `}>
                {props.type}
            </div>
        </div>
    );
}

export default TypeSection;