import React,{useState} from 'react'

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title:"",
        content:""
    })

const handleChange = (e) => {
    const {name, value} = e.target;
    setNote(
        (prevNote)=>{
            return {
                ...prevNote,
                [name] : value
            }
        }
    )
}


const handleSubmit = (e) =>{

    props.addNote(note)
    e.preventDefault();
    
}

return (
    <div >
        <form className='create-note '>
            <input  value={note.title} name = "title" type="text" placeholder='Title' onChange={handleChange}/>
            <textarea value={note.content} name="content" placeholder='Content' onChange = {handleChange}></textarea>
            <button onClick={handleSubmit}>Add</button>


        </form>
    </div>
  )

}
 
  

export default CreateArea