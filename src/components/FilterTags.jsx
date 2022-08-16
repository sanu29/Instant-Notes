export function FilterCategory(notes, list) {
       let filteredprods = [];
    if (list.work === true) {
         let res = notes.filter((note)=>note.tags === 'Work');
               filteredprods = [...filteredprods,...res]
    }
  
    if (list.home === true) {
       let res = notes.filter((note)=>note.tags === 'Home');
       filteredprods = [...filteredprods,...res]
  }
  if (list.school === true) {
       let res = notes.filter((note)=>note.tags === 'School');
       filteredprods = [...filteredprods,...res]
  }
  if (list.excercise === true) {
       let res = notes.filter((note)=>note.tags === 'Excercise');
       filteredprods = [...filteredprods,...res]
  }
  if(list.high === true || list.low===true || list.medium===true)
  {
       let high,low,medium,temp =[]
       if(list.high == true)
       {
            high = filteredprods.filter((note)=>note.priority==="High")
         
           temp = [...high]
       }
       if(list.low === true)
       {
            low = filteredprods.filter((note)=>note.priority==="Low")
        
            temp = [...temp, ...low]
       }
       if(list.medium === true)
       {
            medium = filteredprods.filter((note)=>note.priority==="Medium")
            temp = [...temp, ...medium]

       }

            filteredprods = [...temp]
  }
  if(list.high === false && list.low===false && list.medium===false)
  {
       filteredprods = []
  }
  if(list.search!=="")
  {
       filteredprods = filteredprods.filter((element)=>{
            if(((element.title).toLowerCase()).search(list.search.toLowerCase())!==-1||((element.content).toLowerCase()).search(list.search.toLowerCase())!==-1)
            {
                 return element
            }
       })

  }

return filteredprods
}