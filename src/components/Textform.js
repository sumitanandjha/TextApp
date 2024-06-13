import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to upper case")
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to lower case")
    };

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("Copied Sucessfully to clipboard")
    };

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.ShowAlert("Extra Space Removed")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        setText("");
        props.ShowAlert("text cleared")
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white',color:props.mode==='dark'?'white':'black'}}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(Boolean).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(Boolean).length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
            </div>
        </>
    );
}
