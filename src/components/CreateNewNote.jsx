import { useState } from "react";
import { UseNoteContext } from "../context/note-context";
import { ColorPallete } from "./ColorPallete";
import { PriorityComponent } from "./PriorityComponent";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export function CreateNewNote(props) {

    const {newNoteForm , setnewNoteForm, AddNote} = UseNoteContext()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("Work")
    const [dateAndTime, setDateAndTime] = useState("")
    const [priority, setPriority] = useState("High")
    const [color, setColor] = useState("Red")
    const [dispColorPallete, setDIspColorPallete] = useState("none")
    const [dispDateAndTime, setDIspDateAndTime] = useState("none")
    const [dispTags, setDispTags] = useState("none")
    const modules = {
        toolbar: [
          [{"font":[]}],
          [{ 'align': [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }]
        ]
      };
        const dateLocale= ()=>{
           (new Date(dateAndTime  + new Date().getTimezoneOffset() * -60 * 1000));
        }
                return <div className="newNote font-color-dark" style={{ display: newNoteForm}} >
                <div className="cards-list  w-100">
                    <div className="card-main box-shadow-none w-100" >

                        <div className="card-primary w-100">
                            <div className="dismiss d-flex w-100 justify-content-end">
                                <i className="material-icons" id="dismiss"

                                    onClick={() => setnewNoteForm("none")}
                                >close</i>
                            </div>
                            <input type="text" className="card-title text-align-left w-100 form-text  border-none heading2 bg-white heading2" placeholder="Title" 
                            onChange={(e)=>setTitle(e.target.value)} value={title}
                            />
                            <ReactQuill modules={modules} placeholder="Content" rows={5} className=" para6 text-align-justify w-100 form-text margin-none font-color-dark bg-white margin-none border-none" name="body" onChange={setContent} value={content} required/>
                    
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
                                
                                <span className="material-icons">
                                    date_range
                                 </span>
                                 <div  style={{display:dispDateAndTime}}  className="position-absolute tags-filter border-1 border-color-gray box-shadow-md d-flex-column justify-content-center padding-8">
                                     <input type={'datetime-local'} className="form-text margin-none" onChange={(e)=>setDateAndTime( Date.parse(e.target.value)/1000)}
                                     value={dateLocale()}
                                     ></input>
                                   
                                 </div>
                            </div>
                            <div className="position-relative">
                            <span className="material-icons" onClick={()=>{
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
                                <button className="btn btn-success font-color-white"
                                    onClick={()=>{
                                        setDateAndTime()
                                        AddNote(title,content,tag,color,priority,dateAndTime)
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
                                <button className="btn btn-danger  font-color-white"
                                onClick={()=>{
                                    setColor("Red")
                                    setContent("")
                                    setPriority("High")
                                    setTag("Work")
                                    setTitle("")
                                    setDateAndTime("")
                                }}
                                >discard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;


        }




