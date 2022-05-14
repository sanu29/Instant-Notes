export function FilterFunction (state,action) 
{
   
       switch(action.type)
    {
        case 'work': 
        return {...state, work:action.payload, search:""}
        case 'home': 
        return {...state, home:action.payload, search:""}
        case 'school': 
        return {...state, school:action.payload, search:""}
        case 'high':
          return  {...state, high:action.payload, search:""}
        case 'medium':
          return  {...state, medium:action.payload, search:""}
        case 'low':
           return  {...state, low:action.payload, search:""}
          case 'search':
                     return {...state, search:action.payload}
        default:
            return state
    }
}