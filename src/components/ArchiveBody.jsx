import { UseArchiveContext } from "../context/archive-context"
import { UseNoteContext } from "../context/note-context"
import { CreateNewNote } from "./CreateNewNote"
import { EditNote } from "./EditNote"
import { ArchiveSingNote, SingleNote } from "./SingleNote"
import { noNotes } from "./noNotes"
import { UseFilterContext } from "../context/filter-context"
import { useState } from "react"
import { FilterCategory } from "./FilterTags"
export const ArchiveBody = () =>{
    const {archives, ArchiveRestore, ArchiveDelete} = UseArchiveContext();
    const {newNoteForm , setnewNoteForm, notes, editNoteForm} = UseNoteContext()

    return (
        <div className="main">  
            <div className="d-flex  align-items-center  flex-wrap">
                <div className="d-flex align-items-center justify-content-between text-primary border-color-grey box-shadow-md border-radius-sm overflow-hidden search">
                    
                  
                </div>

                
            </div>     
                  <CreateNewNote />
                 {editNoteForm.note !== ""?<EditNote />:null}

                 <div className="notes">
               
               <div className="cards-list  ">
                  { archives === undefined || archives.length === 0 ? noNotes():
                       archives.map((note)=>ArchiveSingNote(note))}
                   
                   
           
               </div>
           </div>
                 </div>
)}