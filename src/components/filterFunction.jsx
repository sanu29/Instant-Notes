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
        case 'high':
          return  {...state, high:action.payload}
        case 'medium':
          return  {...state, medium:action.payload}
        case 'low':
           return  {...state, low:action.payload}
        default:
            return state
    }
}