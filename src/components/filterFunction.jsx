export function FilterFunction (state,action) 
{
   
       switch(action.type)
    {
        case 'work': 
        return {...state, work:action.payload}
        case 'home': 
        return {...state, home:action.payload}
        case 'school': 
        return {...state, school:action.payload}
        case 'excercise': 
        return {...state, excercise:action.payload}
        default:
            return state
    }
}