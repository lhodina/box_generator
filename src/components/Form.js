import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const box = {
            color,
            height: height + "px",
            width: width + "px"
        }

        props.addBox( box );
        setColor("");
        setHeight("");
        setWidth("");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Color</label>
                <input type="text" onChange={ (e) => setColor(e.target.value) } value={ color } />
            </div>
            <div>
                <label>Height</label>
                <input type="text" onChange={ (e) => setHeight(e.target.value) } value={ height } />
            </div>
            <div>
                <label>Width</label>
                <input type="text" onChange={ (e) => setWidth(e.target.value) } value={ width } />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
}

export default Form;
