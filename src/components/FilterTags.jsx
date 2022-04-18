export function FilterCategory(notes, list) {
    console.log(list)
    let filteredprods = [];
    if (list.work === true) {
         let res = notes.filter((note)=>note.tags === 'Work');
         console.log("res:",res)
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
return filteredprods
}