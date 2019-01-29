import { GET_CONTENT,ADD_FAVORITE,GET_FAVORITE } from './types';
import axios from 'axios'

export const getContent = content =>dispatch => {
    console.log("in Action"); 
    axios
    .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7204bf2801b64b438cdfee67f754183f')
    .then(res => dispatch({
        type: GET_CONTENT,
        payload:res.data.articles
        
    }))
}

export const addFavorite = content =>dispatch => {
  
    dispatch({
        type: ADD_FAVORITE,
        payload:content
    })
}

export const getFavorites = content =>dispatch => {
   
    dispatch({
        type: GET_FAVORITE,
    })
}