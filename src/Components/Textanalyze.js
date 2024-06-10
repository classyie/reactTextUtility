import React,{useState} from 'react'

export default function Textanalyze() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
      })
    const [text, setText] = useState('');
    const [windowsMode, setMode] = useState("Enable Dark Mode");
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
    function displayMode(){
        if(windowsMode==="Enable Dark Mode"){
            setMyStyle({
                color: "white",
                backgroundColor: "black"
              });
            setMode("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: "black",
                backgroundColor: "white"
              });
            setMode("Enable Dark Mode");
        }
    }
    return (
        <div className="container my-3 " style={myStyle}>
            <h2>Enter Text to Analyze</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={changeText} rows="8" placeholder='Enter Text here' />
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={clickToUpper}>To UpperCase</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={clickToLower}>To LowerCase</button>
            <button type="button" className="btn btn-success my-3 mx-1" onClick={displayMode} >{windowsMode}</button>
            <h2>Your Text Summary</h2>
            <p>Word: {text.split(" ").length} Letters: {text.length}</p>    

        </div>
    );
}