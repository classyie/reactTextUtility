import React,{useState} from 'react'

export default function Textanalyze() {
    const [text, setText] = useState('');
    const changeText =(event) =>{
        setText(event.target.value);
    }
    const clickToUpper = (event) => {
        // console.log("Button Clicked");
        setText(text.toUpperCase());
    }
    const clickToLower = (event) =>{
        setText(text.toLowerCase());
    }
    return (
        <div className="container my-3" >
            <h2>Enter Text to Analyze</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={changeText} rows="8" placeholder='Enter Text here' />
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={clickToUpper}>To UpperCase</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={clickToLower}>To LowerCase</button>
            <h2>Your Text Summary</h2>
            <p>Word: {text.split(" ").length} Letters: {text.length}</p>      
        </div>
    );
}