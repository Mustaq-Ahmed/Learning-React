import React, {useState} from 'react'

export default function TextForm(props) {
    function handleOnChange(event){
        console.log("On Change");
        setText(event.target.value)
    }
    
    function handleOnUpClick(){
        console.log("UpperCase Button was Clicked " + text);
        setText(text.toUpperCase())
    }
    const [text, setText] = useState("Enter Text Here")

    return (
        <div>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleOnUpClick} >Convert to UpperCase</button>
        </div>
    )
}
