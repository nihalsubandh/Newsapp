import { GET_CONTENT,ADD_FAVORITE,GET_FAVORITE ,REMOVE_FAVORITE} from '../actions/types';

const initalState={
    content:[],
    favorites:[]
}

export default function(state=initalState,action){
    switch(action.type){
        case GET_CONTENT:
            return{
                ...state,
                content:action.payload
            }
            
        case ADD_FAVORITE: 
                
            return { 
                ...state,
                favorites: [action.payload, ...state.favorites]
            }

        case REMOVE_FAVORITE: 
        return { 
                ...state,
                favorites: state.favorites.filter(i => i.title !== action.payload.title),
            }
            
        case GET_FAVORITE:
                    return{
                        ...state,
                        favorites:[...state.favorites]
                    }         
        default:
            return state;
    }
}