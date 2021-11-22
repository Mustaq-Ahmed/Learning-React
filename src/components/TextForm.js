import React, {useState} from 'react'


export default function TextForm(props) {
    function handleOnChange(event){
        // console.log("On Change");
        setText(event.target.value)  // setting text
    }
    
    function handleOnUpClick(){
        // console.log("UpperCase Button was Clicked " + text);
        setText(text.toUpperCase())  //using text from handleOnChange function and converting to uppercase.Note text iscoming from above function
        props.showAlert("success", "Text is Converted to UpperCase")
    }
    function handleOnLowClick(){
        // console.log("LowerCase Button was Clicked " + text);
        setText(text.toLowerCase())
        props.showAlert("success", "Text is Converted to LowerCase")

    }
    function handleOnClearClick(){
        setText("")
        props.showAlert("success", "Text Cleared")
    }
    function handleCopy(){
        let content = document.getElementById("mybox");
        content.select();
        navigator.clipboard.writeText(content.value);
        props.showAlert("success", "Copied to Clipboard")

    }
    function handleExtraSpaces(){
        let newText = text.split(/[" "]+/); // Split Text Sentences by one/more Spaces. => returns ARRAY
        setText(newText.join(" "));  // join array items by spaces and returns a string.
        props.showAlert("success", "Extra Spaces are Removed")
    }
    function handleCapitalize(){
        let arr = [];
        let words = text.split(" ");
        for(let word of words){ 
            let lower = word.toLowerCase();
            arr.push(lower.charAt(0).toUpperCase() + lower.slice(1));
        }
        setText(arr.join(" "))
        props.showAlert("success", "Words Capitalize")
    }
        
    const [text, setText] = useState("")  // Default value is blank text (no text)

    return (
        <>
        <div>
            <div className="mb-3" style={{color: props.mode === "light"?"black":"white"}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "light"?"white":"black",color: props.mode === "light"?"black":"white"}} id="mybox" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleOnUpClick} >Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleOnLowClick} >Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleOnClearClick} >Clear Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove ExtraSpaces</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCapitalize} >Capitalize</button>
        </div>
        <div className="container my-3" style={{color: props.mode === "light"?"black":"white"}}>
            <h2> Text Summary</h2>
            <p><b>{text.split(" ").length} words and {text.length} characters.</b></p>
            <p><b>{0.008 * text.split(" ").length} Minutes to read.</b></p>
            <p><b>{text.split(".").length - 1} Sentences.</b></p>
        </div>
        </>
    )
}
