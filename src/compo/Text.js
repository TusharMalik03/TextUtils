import React,{useState} from 'react';
import Alert from './Alert';

export default function Text(props){
  
  
  const [text,setInputText] = useState("");
  const [warn, setwarn] = useState(null);
    
    const changed=(event)=>{
        setInputText(event.target.value);
    }
  
    const toUpCase=(event)=>{
        if(text.length===0){
           props.callalert(event);
        }
        else{
        setInputText(text.toUpperCase());
        }
    }

    const toLowerCase=(event)=>{
      if(text.length===0){
          props.callalert(event);
      }
      else
        setInputText(text.toLowerCase());
    }

    const clearText=()=>{
          setInputText('');
    }

    const style={
      backgroundColor:"white",
      color:"black", 
      width:"100vw",
      height:"100vh",
      marginLeft:"0px",
      marginRight:"0px"

    }
    const textStyle={
      border:"2px solid white",
      backgroundColor:"white",
      color:"black"
    }

    if(props.mode==='light')
    {
      style.backgroundColor="white";
      style.color="black";
      textStyle.color="black";
      textStyle.border="2px solid black";
      textStyle.backgroundColor="white";
    }
    else  
    {
      style.backgroundColor="black";
      style.color="white";
      textStyle.color="white";
      textStyle.border="2px solid white";
      textStyle.backgroundColor="#212529";
    }


    return(
    <>
      <div style={style}>
        <div className="container">
          <br/>
          <h3>Enter Text Below To Analyze</h3>
            <textarea value={text} onChange={changed} className="container my-4" style={textStyle} rows="8"></textarea>
            <h4>Text Summary:</h4>
              <h5>Length of Text is: {text.length}</h5>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={toUpCase}>Convert To Upper Case</button>
            <button type="button"  className="btn btn-primary mx-2 my-2" onClick={toLowerCase}>Convert to Lower Case</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
            <h5 className='my-2'>{text.length===0?"Enter Sometext to Preview it here":"Your Text is: "+text}</h5>
      </div>
      </div>

      {/* <Alert/> */}
      {/* <Alert warn={warn}/> */}
    </>
  );
}
