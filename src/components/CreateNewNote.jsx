import { useState } from "react";
import { UseNoteContext } from "../context/note-context";

export function CreateNewNote(props) {

    const {newNoteForm , setnewNoteForm, AddNote} = UseNoteContext()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("Work")
        const [priority, setPriority] = useState("High")
        const [color, setColor] = useState("Red")

            
            return <div className="newNote" style={{ display: newNoteForm }}>
                <div className="cards-list  w-100">
                    <div className="card-main box-shadow-none w-100">

                        <div className="card-primary w-100">
                            <div className="dismiss d-flex w-100 justify-content-end">
                                <i className="material-icons" id="dismiss"

                                    onClick={() => setnewNoteForm("none")}
                                >close</i>
                            </div>
                            <input type="text" className="card-title text-align-left w-100 form-text" placeholder="Title" 
                            onChange={(e)=>setTitle(e.target.value)} value={title}
                            />
                            <textarea className=" para6 text-align-justify w-100 form-text margin-none" placeholder="Content"
                            onChange={(e)=>setContent(e.target.value)}  value={content}
                            ></textarea>
                    
                        <div className="d-flex justify-content-between ">
                            <div>
                                Priority
                                <select className="form-text text-align-center"
                                onChange={(e)=>setPriority(e.target.value) } value={priority}
                                >
                                    <option >High</option>
                                    <option>Meduim</option>
                                    <option>Low</option>
                                    
                                </select>
                            </div>
                            <div>
                            Tag
                                <select className="form-text text-align-center"
                                onChange={(e)=>setTag(e.target.value) } value={tag}
                                >
                                    <option>Work</option>
                                    <option>School</option>
                                    <option>Excercise</option>
                                    <option>Home</option>
                                       
                                </select>
                            </div>
                            <div>
                            Color
                                <select className="form-text text-align-center"
                                onChange={(e)=>setColor(e.target.value) } value={color}
                                >
                                    <option>White</option>
                                    <option>Yellow</option>
                                    <option>Green</option>
                                    <option>Pink</option>
                                    <option>Blue</option>
                                    
                                </select>
                            </div>
                        </div>    </div>
                        <div className="d-flex justify-content-end ">
                            <div>
                                <button className="btn btn-success "
                                    onClick={()=>{
                                        AddNote(title,content,tag,color,priority)
                                        setColor("Red")
                                        setContent("")
                                        setPriority("High")
                                        setTag("Work")
                                        setTitle("")
                                    }}
                                >
                                    Add Note</button>
                            </div>
                            <div>
                                <button className="btn btn-danger "
                                onClick={()=>{
                                    setColor("Red")
                                    setContent("")
                                    setPriority("High")
                                    setTag("Work")
                                    setTitle("")
                                }}
                                >discard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        }



