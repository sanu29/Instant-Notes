import { UseArchiveContext } from "../context/archive-context"
import { UseNoteContext } from "../context/note-context"
import { CreateNewNote } from "./CreateNewNote"
import { EditNote } from "./EditNote"
import { ArchiveSingNote, SingleNote } from "./SingleNote"
export const ArchiveBody = () =>{
    const {archives, ArchiveRestore, ArchiveDelete} = UseArchiveContext();
    const {newNoteForm , setnewNoteForm, notes, editNoteForm} = UseNoteContext()

    
  
    return (
        <div className="main">  
            <div className="d-flex  align-items-center flex-wrap">
                <div className="d-flex align-items-center text-primary border-color-grey box-shadow-md border-radius-sm overflow-hidden search">
                    <input type="text" className="input-sm box-shadow-none margin-none search" placeholder="Seacrh..."/> 
                    <span className="material-icons align-self-center bg-white padding-4 ">
                        search
                    </span>
                  
                </div>
                <button className="filter box-shadow-md d-flex justify-content-center align-items-center">                
                    
                    <span className="material-icons margin-none">tune</span>
              
              Tags</button>
            </div>     
                  <CreateNewNote />
                 {editNoteForm.note !== ""?<EditNote />:null}

                 <div className="notes">
               
               <div className="cards-list  ">
                  { archives === undefined || archives.length === 0 ?  <h2 className="card-title terms text-align-left">You have not added any note to Archive !!</h2>:
                       archives.map((note)=>ArchiveSingNote(note))}
                   
                   
           
               </div>
           </div>
                 </div>
)}