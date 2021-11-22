import React from 'react'

export default function About(props) {
    let stylingMode = {
       color: props.mode === "light"?"black":"white",
       backgroundColor: props.mode === "light"?"white":"black"
    }
    return (
        <>
            <h1 style={{color: props.mode === "light"?"black":"white"}}> About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={stylingMode}>
                            <strong>Play-Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={stylingMode}>
                            <strong>Play-Text is a Text Analyzer Website.</strong> To play around text, and make different style of text using our application. <strong>Any Improvement/Update you want let us know and contact us. </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={stylingMode}>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={stylingMode}>
                            <strong>Our Website is free and Open Source to use.</strong> This website is made to help and support users no cost is consumed from the users/consumers.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={stylingMode}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={stylingMode}>
                            <strong>Works on Almost all websites.</strong> Our Website works on all mostly used browsers like Google Chome, Firefox, Internet Explorer, Microsoft Edge, Opera ..... Many More.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-primary my-3">Enable Dark Mode</button> */}
        </>
    )
}
