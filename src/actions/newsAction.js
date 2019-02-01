import { GET_CONTENT,ADD_FAVORITE,GET_FAVORITE,REMOVE_FAVORITE } from './types';
import axios from 'axios'

export const getContent = content =>dispatch => {
    axios
    .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=7204bf2801b64b438cdfee67f754183f')
    .then(res => dispatch({
        type: GET_CONTENT,
        payload:res.data.articles.map((item) =>{
            return ({
                image:item.urlToImage,
                title:item.title,
                content:item.content,
                url:item.url,
            })
        })
        
    }))
}

export const addFavorite = (img,title,content,url) => dispatch => {
  
    dispatch({
        type: ADD_FAVORITE,
        payload:{image:img,title:title,content:content,url:url}
    })
}

export const removeFavorite = (title) => dispatch => {
    dispatch({
        type: REMOVE_FAVORITE,
        payload:{title:title}
    })
}

export const getFavorites = content => dispatch => {
   
    dispatch({
        type: GET_FAVORITE,
    })
}