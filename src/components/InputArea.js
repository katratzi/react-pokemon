import React, { useState } from 'react';

function InputArea(props) {

    const [inputText, setInputText] = useState("");



    function updateText(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return <div>
        <h1>Input: {inputText}</h1>
        <input type="text" onChange={updateText} value={inputText}></input>
    </div>
}

export default InputArea;