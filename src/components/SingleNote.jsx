import { UseArchiveContext } from "../context/archive-context";
import { UseNoteContext } from "../context/note-context";

export const SingleNote = (note) => {
    const {newNoteForm , setnewNoteForm,editNoteForm, setEditNoteForm, DeleteNote} = UseNoteContext()
   const {archives, setarchives, ArchiveNote} = UseArchiveContext()
    const CardColor = (color)=>{
        switch(color)
        {
            case "Yellow" : return "rgb(255,244,117)"
            case "Green" : return "#CCFF90"
            case "Blue" : return "#CBF0F8"
            case "White" : return ""
            case "Pink"  : return "#FDCFE8"
        }
    }


    return (


        <div className="card-main box-shadow-none " key={note._id} style={{backgroundColor:CardColor(note.color)}}>
                 
            <div className="margin-32">
                <h2 className="card-title text-align-left">{note.title}</h2>
                <div className="card-subtitle para6 text-align-justify">
                    {note.content}
                </div>
            </div>
            <div className="card-action d-flex justify-content-between ">
                <div>{note.priority}
                <div className=" border-radius-none badge badge-primary margin-16 ">{note.tags}</div>
                </div>
                <div>
                <span className="material-icons"
                onClick= {()=>{
                   
                    setEditNoteForm({display:'flex',note:note})
                }}

                >edit</span>
                    <span className="material-icons">palette</span>
                    <span className="material-icons">label</span>
                    <span className="material-icons"
                    onClick={()=>ArchiveNote(note._id)}
                    >archive</span>
                    <span className="material-icons"
                    
                    onClick={()=>DeleteNote(note._id)}
                    >delete</span>

                </div>
            </div>
        </div>

    );
};


export const ArchiveSingNote = (note) => {
    const {newNoteForm , setnewNoteForm,editNoteForm, setEditNoteForm, DeleteNote} = UseNoteContext()
   const {archives, setarchives, ArchiveNote, ArchiveRestore, ArchiveDelete} = UseArchiveContext()
    const CardColor = (color)=>{
        switch(color)
        {
            case "Yellow" : return "rgb(255,244,117)"
            case "Green" : return "#CCFF90"
            case "Blue" : return "#CBF0F8"
            case "White" : return ""
            case "Pink"  : return "#FDCFE8"
        }
    }


    return (


        <div className="card-main box-shadow-none " key={note._id} style={{backgroundColor:CardColor(note.color)}}>
                 
            <div className="margin-32">
                <h2 className="card-title text-align-left">{note.title}</h2>
                <div className="card-subtitle para6 text-align-justify">
                    {note.content}
                </div>
            </div>
            <div className="card-action d-flex justify-content-between ">
                <div>{note.priority}
                <div className=" border-radius-none badge badge-primary margin-16 ">{note.tags}</div>
                </div>
                <div>
                    <span className="material-icons">palette</span>
                    <span className="material-icons"
                    onClick={()=>ArchiveDelete(note._id)}
                    >delete</span>
                    <span className="material-icons"
                    onClick={()=>ArchiveRestore(note._id)}
                    >archive</span>
                

                </div>
            </div>
        </div>

    );
};


