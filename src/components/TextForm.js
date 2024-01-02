import React,{useState} from 'react'

export default function TextForm(props) {

  const handleupclick = () =>{
    // console.log('Button has been clicked' + text);
    let newtext = text.toUpperCase();
    settext(newtext)
  }

  const handleonchange = (event) => {
    // console.log('On change');
    settext(event.target.value)
  }

  const [ text, settext ] = useState("");

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder='Enter Text' onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>Move to upper case</button>
    </div>
  )
}
