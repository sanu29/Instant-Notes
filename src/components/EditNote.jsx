import { useState } from "react";
import { UseNoteContext } from "../context/note-context";
import { ColorPallete } from "./ColorPallete";
import { PriorityComponent } from "./PriorityComponent";

export function EditNote(note) {

    const {newNoteForm , setnewNoteForm, AddNote,editNoteForm, setEditNoteForm, UpdateNote} = UseNoteContext()
 
    const [title, setTitle] = useState(editNoteForm.note.title)
    const [content, setContent] = useState(editNoteForm.note.content)
    const [tag, setTag] = useState(editNoteForm.note.tags)
    const [dateAndTime, setDateAndTime] = useState(editNoteForm.note.date)
    const [priority, setPriority] = useState(editNoteForm.note.priority)
    const [color, setColor] = useState(editNoteForm.note.color)
    const [dispColorPallete, setDIspColorPallete] = useState("none")
    const [dispDateAndTime, setDIspDateAndTime] = useState("none")
    const [dispTags, setDispTags] = useState("none")
    const dateLocale= ()=>{
        (new Date(dateAndTime  + new Date().getTimezoneOffset() * -60 * 1000));
     }

            
        return <div className="newNote" style={{ display: editNoteForm.display }}>
            <div className="cards-list  w-100">
                <div className="card-main box-shadow-none w-100">

                <div className="card-primary w-100">
                            <div className="dismiss d-flex w-100 justify-content-end">
                                <i className="material-icons" id="dismiss"

                                    onClick={() => setnewNoteForm("none")}
                                >close</i>
                            </div>
                            <input type="text" className="card-title text-align-left w-100 form-text heading2" placeholder="Title" 
                            onChange={(e)=>setTitle(e.target.value)} value={title}
                            />
                            <textarea className=" para6 text-align-justify w-100 form-text margin-none" placeholder="Content"
                            onChange={(e)=>setContent(e.target.value)}  value={content}
                            ></textarea>
                    
                        <div className="d-flex w-100 justify-content-evenly align-items-center">
                          <div className="d-flex w-100 justify-content-start align-items-center">
                            <div className="position-relative"onClick={
                                ()=>{
                                    if(dispDateAndTime==="none"){
                                    setDIspDateAndTime('block');
                                   setDIspColorPallete('none')
                                   setDispTags("none")
                                }
                                   else{setDIspDateAndTime('none')}}}>
                                
                                <span class="material-icons">
                                    date_range
                                 </span>
                                 <div  style={{display:dispDateAndTime}}  className="position-absolute tags-filter border-1 border-color-gray box-shadow-md d-flex-column justify-content-center padding-8">
                                     <input type={'datetime-local'} className="form-text margin-none" onChange={(e)=>setDateAndTime( Date.parse(e.target.value)/1000)}
                                     value={dateLocale()}
                                     ></input>
                                   
                                 </div>
                            </div>
                            <div className="position-relative">
                            <span class="material-icons" onClick={()=>{
                                if(dispTags==="none")
                                {
                                    setDispTags("block")
                                    setDIspColorPallete("none")
                                    setDIspDateAndTime("none")
                                }
                                else{setDispTags("none")}
                            
                            }}>
                                local_offer
                                </span>
                                <div   className="position-absolute tags-filter border-1 border-color-gray box-shadow-md d-flex-column justify-content-center padding-8" style={{display:dispTags}}>
                                   <div className="form-text margin-none padding-4 text-align-center options" 
                                   onClick={()=>{
                                       setTag("Work")
                                       setDispTags("none")
                                }}>Work</div>
                                   <div className="form-text margin-none padding-4 text-align-center options"   onClick={()=>{
                                       setTag("School")
                                       setDispTags("none")
                                }}>School</div>
                                   <div className="form-text margin-none padding-4 text-align-center options"   onClick={()=>{
                                       setTag("Home")
                                       setDispTags("none")
                                }}>Home</div>
                                </div>
                                </div>
                            {ColorPallete(dispColorPallete, setDIspColorPallete,color,setColor,setDIspDateAndTime, setDispTags)}
                            </div>
                            {PriorityComponent(setPriority, priority)}
                        </div>   
                         </div>
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
    
  



