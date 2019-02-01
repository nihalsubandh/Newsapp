import React from 'react';
import { StyleSheet,FlatList,WebView } from 'react-native';
import {connect} from 'react-redux';
import { getContent,addFavorite,removeFavorite } from '../actions/newsAction';
import Spinner from './common/Spinner'
import NewsLayout from './NewsLayout';



class Home extends React.Component {


    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);   
        this.favoriteClick = this.favoriteClick.bind(this);

        this.state={
          url:"",

        }
    }


  componentDidMount(){
        this.props.getContent(); 
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.content){
      this.setState({con:nextProps.content.content})
    }
    
    if(nextProps.content.favorites){
      this.setState({favorites:nextProps.content.favorites})
    }

    
}

onClick(e){
  this.setState({url:e});
}

favoriteClick(img,title,content,url,favorite){

  if(favorite){
    this.props.removeFavorite(title)
  }else{
    this.props.addFavorite(img,title,content,url); 
  }
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
        (this.state.con && this.state.con.length>0)?
         <FlatList
         data={this.state.con}
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
         <Spinner/>
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
    content:state.news,
})

export default connect(mapStateToProps,{getContent,addFavorite,removeFavorite})(Home);