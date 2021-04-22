import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


function InputArea(props) {

    // controlled state for input
    const [inputText, setInputText] = useState("");

    function updateText(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function handleClick(event) {
        const pokemonName = inputText;
        props.onClicked(pokemonName);
    }

    // I don't want capitalize on the button
    const buttonStyle = {
        textTransform: "none",
    }

    return <div>
        <h1>Input: {inputText}</h1>
        <input type="text" onChange={updateText} value={inputText} placeholder="try ditto :)"></input>
        <p>
            <Button onClick={handleClick} style={buttonStyle} variant="contained" color="primary">Catch 'em'</Button>
        </p>
    </div>
}

export default InputArea;