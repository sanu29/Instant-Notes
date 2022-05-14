import { UseNoteContext } from "../context/note-context"
import { CreateNewNote } from "./CreateNewNote"
import { EditNote } from "./EditNote"
import { SingleNote } from "./SingleNote"
import { noNotes } from "./noNotes"
export const LabelBody = () =>{
    const {newNoteForm , setnewNoteForm, notes, editNoteForm} = UseNoteContext()
    const workNotes = notes.filter((n)=>n.tags==='Work')
    const schoolNotes = notes.filter((n)=>n.tags==='School')
    const homeNotes = notes.filter((n)=>n.tags==='Home')

    return (
        <div className="main">  
        <div className="d-flex  align-items-center  flex-wrap">
        <div className="d-flex align-items-center justify-content-between text-primary border-color-grey box-shadow-md border-radius-sm overflow-hidden search">
        </div>
        </div>     
      <CreateNewNote />
     {editNoteForm.note !== ""?<EditNote />:null}
     <div className="notes">
            <div className="heading3 margin-top-1"> Work </div>
               <div className="cards-list  ">
                

                  { workNotes === undefined || workNotes.length === 0 ? noNotes():
                       workNotes.map((note)=>SingleNote(note))}
                   
                   
           
               </div>
           </div>
           <div className="notes">
            <div className="heading3 margin-top-1"> School </div>
               <div className="cards-list  ">
                

                  { schoolNotes === undefined || schoolNotes.length === 0 ? noNotes():
                       schoolNotes.map((note)=>SingleNote(note))}
                   
                   
           
               </div>
           </div>
           <div className="notes">
            <div className="heading3 margin-top-1"> Home </div>
               <div className="cards-list  ">
                

                  { homeNotes === undefined || homeNotes.length === 0 ? noNotes():
                       homeNotes.map((note)=>SingleNote(note))}
                   
                   
           
               </div>
           </div>
     </div>
    )
}