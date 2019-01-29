import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {connect} from 'react-redux';
import { getFavorites } from '../actions/newsAction';
import Spinner from './common/Spinner'

import NewsLayout from './NewsLayout';

class Favourites extends React.Component {


    constructor(props){
        super(props);

        this.state={
            con:[],
            url:""
        }
    }

    componentDidMount(){
        this.props.getFavorites()
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
        this.state.con && this.state.con.length>0?
         <FlatList
         data={this.state.con}
         renderItem={({item}) => 
             <NewsLayout 
             img={item.urlToImage} 
             title = {item.title} 
             desc={item.content}
             onClick={this.onClick}
             url={item.url}
             favoriteClick={this.favoriteClick}
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
    favorites:state.favorites
})

export default connect(mapStateToProps,{getFavorites})(Favourites);