import { useState } from "react";
import { UseNoteContext } from "../context/note-context";

export function EditNote(note) {

    const {newNoteForm , setnewNoteForm, AddNote,editNoteForm, setEditNoteForm, UpdateNote} = UseNoteContext()
 
    const [title, setTitle] = useState(editNoteForm.note.title)
    const [content, setContent] = useState(editNoteForm.note.content)
    const [tag, setTag] = useState(editNoteForm.note.tags)
    const [priority, setPriority] = useState(editNoteForm.note.priority)
    const [color, setColor] = useState(editNoteForm.note.color)
 


            
        return <div className="newNote" style={{ display: editNoteForm.display }}>
            <div className="cards-list  w-100">
                <div className="card-main box-shadow-none w-100">

                    <div className="card-primary w-100">
                        <div className="dismiss d-flex w-100 justify-content-end">
                            <i className="material-icons" id="dismiss"

                                onClick={() => setEditNoteForm({display:"none",note:""})}
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
                                <option>Task</option>
                                
                            </select>
                        </div>
                        <div>
                        Color
                            <select className="form-text text-align-center"
                            onChange={(e)=>setColor(e.target.value) } value={color}
                            >
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Yellow</option>
                                <option>Green</option>
                                <option>Black</option>
                                
                            </select>
                        </div>
                    </div>    </div>
                    <div className="d-flex justify-content-end ">
                        <div>
                            <button className="btn btn-success "
                                onClick={()=>{
                                          UpdateNote(title,content,tag,color,priority,editNoteForm.note._id)
                                }}
                            >
                                Update Note</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>;
    
    }
    
  



