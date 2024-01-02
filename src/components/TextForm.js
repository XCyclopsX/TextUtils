import React,{useState} from 'react'

export default function TextForm(props) {

  const handleupclick = () =>{
    let newtext = text.toUpperCase();
    settext(newtext)
  }

  const handleloclick = () =>{
    let newtext = text.toLowerCase();
    settext(newtext)
  }

  const handleclearclick = () =>{
    let newtext = ('');
    settext(newtext)
  }

  const handlespeakclick = () =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleonchange = (event) => {
    settext(event.target.value)
  }

  const [ text, settext ] = useState("");

  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder='Enter Text' onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Move to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>Move to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Click to clear text</button>
        <button className="btn btn-success mx-2" onClick={handlespeakclick}>Click to speak</button>
    </div>
    <div className="conatiner">
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{ 0.008 * text.split(" ").length}</b> minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
