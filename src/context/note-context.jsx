import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const NoteContext = createContext()
const UseNoteContext = ()=>useContext(NoteContext)

function NoteContextProvider({children})
    {

        const [newNoteForm , setnewNoteForm] = useState("none")
        const [editNoteForm , setEditNoteForm] = useState({display:'none',note:""})
        const [notes, setNotes] = useState([])
               useEffect(()=>
        {
            async function fetchdata()
            {
                     const response = await axios({
                       method: 'get',
                       url: '/api/notes',
                       headers: {
                           authorization: localStorage.getItem('token'),
                       }})
                       setNotes(response.data.notes)
            }
        fetchdata()
    },[])
        const AddNote = async (title,content,tags,color,priority, dateAndTime) =>{

            const note = {
                title,content,tags,color,priority,date:dateAndTime
            }
                try {
                 const   response = await axios({
                        method: 'post',
                        url: '/api/notes',
                        headers: {
                            authorization: localStorage.getItem('token'),
                        },
                        data:{
                            note
                        }
                    })
                    setNotes(response.data.notes)
                    setnewNoteForm("none")
                }
                catch(err)
                {}
        } 


        const UpdateNote = async (title,content,tags,color,priority,id, dateAndTime) =>{

            const note = {
                title,content,tags,color,priority, date:dateAndTime
            }
           
                try {
                 const   response = await axios({
                        method: 'post',
                        url: `/api/notes/${id}`,
                        headers: {
                            authorization: localStorage.getItem('token'),
                        },
                        data:{
                            note
                        }
                    })
                  
                    setNotes(response.data.notes)
                    setEditNoteForm({display:'none',note:""})
                }
                catch(err)
                {
                        }
        } 


        const DeleteNote =async (id) => {
            try {
                const   response = await axios({
                       method: 'delete',
                       url: `/api/notes/${id}`,
                       headers: {
                           authorization: localStorage.getItem('token'),
                       }
                   })
                 
                   setNotes(response.data.notes)
             }
               catch(err)
               {
                       }
       
        }
        return(
            <NoteContext.Provider  value={{newNoteForm, setnewNoteForm, AddNote, notes , editNoteForm, setEditNoteForm,UpdateNote, DeleteNote, setNotes}}>
                {children}
            </NoteContext.Provider>
        )
    }

    export {NoteContext, UseNoteContext, NoteContextProvider}