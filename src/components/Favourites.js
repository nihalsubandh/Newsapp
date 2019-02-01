import React from 'react';
import { StyleSheet, FlatList,WebView } from 'react-native';
import {connect} from 'react-redux';
import { getFavorites,removeFavorite } from '../actions/newsAction';
import Spinner from './common/Spinner'

import NewsLayout from './NewsLayout';

class Favourites extends React.Component {


    constructor(props){
        super(props);

        this.state={
            favorites:[],
            url:""
        }

        this.onClick = this.onClick.bind(this);   
        this.favoriteClick = this.favoriteClick.bind(this);
    }

    componentDidMount(){
        this.props.getFavorites()
    }

    componentWillReceiveProps(nextProps){
  
      if(nextProps.favorites){
        this.setState({favorites:nextProps.favorites.favorites})
      }
      
  }

  favoriteClick(img,title,content,url,favorite){

    if(favorite){
      this.props.removeFavorite(title)
    }
  }

  onClick(e){
    this.setState({url:e});
  }
  
  
  render() {
      
    if(this.state.url){
      return (
        <WebView
          source={{uri: this.state.url}}
          style={{height:"100%"}}
        />
      );
    }else{

      return (
        this.state.favorites && this.state.favorites.length>0?
         <FlatList
         data={this.state.favorites}
         renderItem={({item}) => 
             <NewsLayout 
             img={item.image} 
             title = {item.title} 
             desc={item.content}
             onClick={this.onClick}
             url={item.url}
             favoriteClick={this.favoriteClick}
             favorite = {this.state.favorites.some(i => i.title === item.title)}
             />
           }
             />
         :
         <Spinner style={{alignItems:"center"}}/>
         );
        }

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const mapStateToProps =(state) => ({
    favorites:state.news
})

export default connect(mapStateToProps,{getFavorites,removeFavorite})(Favourites);