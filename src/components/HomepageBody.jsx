import { useState } from "react"
import { UseFilterContext } from "../context/filter-context"
import { UseNoteContext } from "../context/note-context"
import { CreateNewNote } from "./CreateNewNote"
import { EditNote } from "./EditNote"
import { FilterCategory } from "./FilterTags"
import { SingleNote } from "./SingleNote"



export const HomepageBody = () =>{
    const {newNoteForm , setnewNoteForm, notes, editNoteForm} = UseNoteContext()
    const { state, dispatch} = UseFilterContext();
    const [filterDisp, setFilterDisp] = useState('none')
    let filteredprods  = FilterCategory(notes, state)
    const [sort, setSort] = useState({asending:false,decending:false})
    let High = filteredprods.filter((note)=>note.priority==="High")
    let Medium = filteredprods.filter((note)=>note.priority==="Medium")
    let Low = filteredprods.filter((note)=>note.priority==="Low")
    if(sort.acending === true)
    {
       
        filteredprods = [...High,...Medium,...Low]
    }
    else{
        filteredprods = [...Low,...Medium,...High]
    }
    return (
        <div className="main">  
            <div className="d-flex  align-items-center flex-wrap">
                <div className="d-flex align-items-center text-primary border-color-grey box-shadow-md border-radius-sm overflow-hidden search">
                    <input type="text" className="input-sm box-shadow-none margin-none search" placeholder="Seacrh..."/> 
                    <span className="material-icons align-self-center bg-white padding-4 ">
                        search
                    </span>
                  
                </div>
                <div className="position-relative">
                <button className="filter box-shadow-md d-flex justify-content-center align-items-center"
                onClick={() =>filterDisp==='none'?setFilterDisp('flex'):setFilterDisp('none')}
                >                
                    
             <span className="material-icons margin-none ">tune</span>
              
              Tags
              
              </button>
              <div className=" tag-filter d-flex justify-content-start align-items-center flex-wrap" style={{display:filterDisp}}>
              <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="Work"  checked={ state['work']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'work', payload:true}): dispatch({type:'work', payload:false})}
                  />
                Work</label>
                <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="School"  checked={ state['school']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'school', payload:true}): dispatch({type:'school', payload:false})}/>
                  
                School</label>
                <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="Excercise" checked={ state['excercise']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'excercise', payload:true}): dispatch({type:'excercise', payload:false})}/>
                  
                Excercise</label>
                <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="Home"  checked={ state['home']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'home', payload:true}): dispatch({type:'home', payload:false})}/>
                                Home</label>
                             </div>
              </div>


              <div className="d-flex justify-content-center align-items-center">
              <label className="margin-16"><input type="radio" name="sort" class="input-radion"  onChange={(e)=>e.target.checked?setSort({acending:false,decending:true}):setSort({acending:true,decending:false})} value="decending" />Sort By Decending Priority</label>
              <label className="margin-16"><input type="radio" name="sort" class=" input-radio" onChange={(e)=>e.target.checked?setSort({acending:true,decending:false}):setSort({acending:false,decending:true})} value="acending"/>Sort By Acending Priority</label>
              </div>
            </div>     
                  <CreateNewNote />
                 {editNoteForm.note !== ""?<EditNote />:null}
            <div className="notes">
               
                <div className="cards-list  ">
                    { filteredprods === undefined || filteredprods.length === 0 ?  <h2 className="card-title terms text-align-left">You have not added any note !! Click On create new Note to Add !!</h2>:
                        filteredprods.map((note)=>SingleNote(note))
                    
                    }
            
                </div>
            </div>
        </div>


    )
}


