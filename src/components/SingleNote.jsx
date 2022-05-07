import { UseArchiveContext } from "../context/archive-context";
import { UseNoteContext } from "../context/note-context";
export const SingleNote = (note) => {
    const {newNoteForm , setnewNoteForm,editNoteForm, setEditNoteForm, DeleteNote} = UseNoteContext()
   const {archives, setarchives, ArchiveNote} = UseArchiveContext()
    const CardColor = (color)=>{
        switch(color)
        {
            case "Yellow" : return "var(--Yellow)"
            case "Green" : return "var(--Green)"
            case "Blue" : return "var(--Blue)"
            case "White" : return "var(--light)"
            case "Pink"  : return "var(--Pink)"
        }
    }
   const dueDate = () =>{
        if(note.date===undefined||note.date==="")
        {
            return ""
        }
        else{
           return (new Date(note.date * 1000).toLocaleString())
        }
        
       }
    
    return (


        <div className="card-main box-shadow-none font-color-white" key={note._id} style={{backgroundColor:CardColor(note.color)}}>
                 
            <div className="margin-32 ">
                <h2 className="card-title text-align-left">{note.title}</h2>
                <div className=" para6 text-align-justify font-color-dark" >
                <div dangerouslySetInnerHTML={{__html: note.content}}></div>
                </div>
            </div>
            <div className="card-action d-flex justify-content-between ">
                <div>{note.priority}
                <div className=" border-radius-none badge badge-primary margin-16 ">{note.tags}  </div>
                </div>
                <div>
                <span className="material-icons"
                onClick= {()=>{
                   
                    setEditNoteForm({display:'flex',note:note})
                }}

                >edit</span>
                    <span className="material-icons"
                    onClick={()=>ArchiveNote(note._id)}
                    >archive</span>
                    <span className="material-icons"
                    
                    onClick={()=>DeleteNote(note._id)}
                    >delete</span>

                </div>
              
            </div>
            <div className="card-action d-flex justify-content-between ">
            {dueDate()}
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
        case "Yellow" : return "var(--Yellow)"
        case "Green" : return "var(--Green)"
        case "Blue" : return "var(--Blue)"
        case "White" : return "var(--light)"
        case "Pink"  : return "var(--Pink)"
    }
}
    const dueDate = () =>{
        if(note.date===undefined||note.date==="")
        {
            return ""
        }
        else{
           return (new Date(note.date * 1000).toLocaleString())
        }
        
       }
    return (



        <div className="card-main box-shadow-none font-color-white" key={note._id} style={{backgroundColor:CardColor(note.color)}}>
                 
            <div className="margin-32 ">
                <h2 className="card-title text-align-left">{note.title}</h2>
                <div className=" para6 text-align-justify font-color-dark w-100"  >
                <div dangerouslySetInnerHTML={{__html: note.content}} className="w-100"></div>
                </div>
            </div>
            <div className="card-action d-flex justify-content-between ">
                <div>{note.priority}
                <div className=" border-radius-none badge badge-primary margin-16 ">{note.tags}  </div>
                </div>
              
                <div>
                   
                    <span className="material-icons " 
                    onClick={()=>ArchiveDelete(note._id)}
                    >delete</span>
                    <span className="material-icons"
                    onClick={()=>ArchiveRestore(note._id)}
                    >archive</span>
                

                </div>   </div>
                <div className="card-action d-flex justify-content-between ">
            {dueDate()}
         
            </div>
        </div>

    );
};


