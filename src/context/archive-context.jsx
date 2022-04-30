import axios from "axios";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { UseNoteContext } from "./note-context";

const ArchiveContext =  createContext()

const UseArchiveContext = () =>useContext(ArchiveContext)

function ArchiveContextProvider({children})
{
    const {newNoteForm , setnewNoteForm, notes, editNoteForm, setNotes} = UseNoteContext();
    const [archives, setArchives] = useState([])

    useEffect(()=>
        {
            async function fetchdata()
            {
                     const response = await axios({
                       method: 'get',
                       url: '/api/archives',
                       headers: {
                           authorization: localStorage.getItem('token'),
                       }})
                       setArchives(response.data.notes)
            }
        fetchdata()
    },[])

    const ArchiveNote = async (id) =>{

                try {
                 const   response = await axios({
                        method: 'post',
                        url: `/api/notes/archives/${id}`,
                        headers: {
                            authorization: localStorage.getItem('token'),
                        }
                    })
                    setArchives(response.data.archives)
                    setNotes(response.data.notes)
                }
                catch(err)
                {
                    
                }
        } 
    const ArchiveRestore = async (id) =>{


        try {
            const   response = await axios({
                   method: 'post',
                   url: `/api/archives/restore/${id}`,
                   headers: {
                       authorization: localStorage.getItem('token'),
                   }
               })

               setArchives(response.data.archives)
               setNotes(response.data.notes)
           }
           catch(err)
           {
              
           }
    }

    const ArchiveDelete = async (id) =>{


        try {
            const   response = await axios({
                   method: 'delete',
                   url: `/api/archives/delete/${id}`,
                   headers: {
                       authorization: localStorage.getItem('token'),
                   }
               })
                            setArchives(response.data.archives)
               setNotes(response.data.notes)
           }
           catch(err)
           {
             
           }
    }
    return (
        <ArchiveContext.Provider value={{archives,setArchives, ArchiveNote, ArchiveRestore, ArchiveDelete}}>
            {children}
        </ArchiveContext.Provider>
    )
}

export{ArchiveContext, ArchiveContextProvider, UseArchiveContext}