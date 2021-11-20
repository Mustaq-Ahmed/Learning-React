import React, {useState} from 'react'

export default function TextForm(props) {
    function handleOnChange(event){
        console.log("On Change");
        setText(event.target.value)  // setting text
    }
    
    function handleOnUpClick(){
        // console.log("UpperCase Button was Clicked " + text);
        setText(text.toUpperCase())  //using text from handleOnChange function and converting to uppercase.Note text iscoming from above function
    }
    function handleOnLowClick(){
        // console.log("LowerCase Button was Clicked " + text);
        setText(text.toLowerCase())
    }
    function handleOnClearClick(){
        setText("")
    }
    function handleCopy(){
        let content = document.getElementById("mybox");
        content.select();
        navigator.clipboard.writeText(content.value);
    }
    function handleExtraSpaces(){
        let newText = text.split(/[" "]+/); // Split Text Sentences by one/more Spaces. => returns ARRAY
        setText(newText.join(" "));  // join array items by spaces and returns a string.
    }
    const [text, setText] = useState("")  // Default value is blank text (no text)

    return (
        <>
        <div>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleOnUpClick} >Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleOnLowClick} >Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleOnClearClick} >Clear Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove ExtraSpaces</button>
        </div>
        <div className="container my-3">
            <h2> Text Summary</h2>
            <p><b>{text.split(" ").length} words and {text.length} characters.</b></p>
            <p><b>{0.008 * text.split(" ").length} Minutes to read.</b></p>
            <p><b>{text.split(".").length - 1} Sentences.</b></p>
        </div>
        </>
    )
}
