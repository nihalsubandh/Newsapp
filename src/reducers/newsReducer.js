import { GET_CONTENT,ADD_FAVORITE,GET_FAVORITE } from '../actions/types';

const initalState={
    content:"",
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
                favorites: [...state.favorites, action.payload]
            }
            case ADD_FAVORITE:
                    return{
                        ...state,
                        favorites:action.payload
                    }         
        default:
            return state;
    }
}