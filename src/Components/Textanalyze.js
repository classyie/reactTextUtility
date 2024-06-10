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
    return (
        <div className="container my-3" >
            <h2>Enter Text to Analyze</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={changeText} rows="8" placeholder='Enter Text here' />
            <button type="button" className="btn btn-primary my-3" onClick={clickToUpper}>To UpperCase</button>
        </div>
    );
}