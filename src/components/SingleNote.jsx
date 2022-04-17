import { UseNoteContext } from "../context/note-context";

export const SingleNote = (note) => {
    const {newNoteForm , setnewNoteForm,editNoteForm, setEditNoteForm} = UseNoteContext()
    return (


        <div className="card-main box-shadow-none " key={note._id}>
                 
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
                    <span className="material-icons">archive</span>
                    <span className="material-icons">delete</span>

                </div>
            </div>
        </div>

    );
};
