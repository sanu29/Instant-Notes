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
    const [sort, setSort] = useState({prioirty:'ascending',date:""})
    let High = filteredprods.filter((note)=>note.priority==="High")
    let Medium = filteredprods.filter((note)=>note.priority==="Medium")
    let Low = filteredprods.filter((note)=>note.priority==="Low")
      if(sort.prioirty === "ascending")
    {
       
        filteredprods = [...High,...Medium,...Low]
    }
    else{
        filteredprods = [...Low,...Medium,...High]
    }
    if(sort.date === "ascending")
    {
       filteredprods = filteredprods.sort((a,b)=>a.date-b.date)
    }
    else{
        filteredprods = filteredprods.sort((a,b)=>a.date-b.date).reverse()
    }
    return (
        <div className="main">  
            <div className="d-flex  align-items-center  flex-wrap">
                <div className="d-flex align-items-center justify-content-between text-primary border-color-grey box-shadow-md border-radius-sm overflow-hidden search">
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

              <div className=" tag-filter d-flex justify-content-evenly align-items-center flex-wrap" style={{display:filterDisp}}>
             <div className="w-100  d-flex justify-content-left form-text font-color-primary  padding-8">Labels </div>
             
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
                  <input type="checkbox" name="number" className="input input-checkbox" value="Home"  checked={ state['home']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'home', payload:true}): dispatch({type:'home', payload:false})}/>
                                Home</label>
                             
                 <div className="w-100  d-flex justify-content-left form-text font-color-primary  padding-8"> Priority </div>
                 <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="High"  checked={ state['high']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'high', payload:true}): dispatch({type:'high', payload:false})}/>
                                High</label>  
                                <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="Medium"  checked={ state['medium']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'medium', payload:true}): dispatch({type:'medium', payload:false})}/>
                                Medium</label>
                                <label >
                  <input type="checkbox" name="number" className="input input-checkbox" value="Low"  checked={ state['low']}
                   onChange={(e)=>e.target.checked === true ? dispatch({type:'low', payload:true}): dispatch({type:'low', payload:false})}/>
                                Low</label>         
                             
            </div>
              </div>



              </div> 




              <div className="d-flex justify-content-start align-items-center flex-wrap">
              <label className="d-flex justify-content-center align-items-center margin-none">
                 <span class="material-icons margin-4 "  onClick={(e)=>sort.prioirty==='descending'?setSort({...sort, prioirty:'ascending'}):setSort({...sort, prioirty:'descending'})}>{sort.prioirty==="ascending"? 'arrow_upward':'arrow_downward'}</span> Priority
              </label>
              <label className="d-flex justify-content-center align-items-center margin-none">
                 <span class="material-icons margin-4 "  onClick={(e)=>sort.date==='descending'?setSort({...sort, date:'ascending'}):setSort({...sort, date:'descending'})}>{sort.date==="ascending"? 'arrow_upward':'arrow_downward'}</span> Date
              </label>  
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


