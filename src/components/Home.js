import React from 'react';
import { StyleSheet,FlatList,WebView,AppState } from 'react-native';
import {connect} from 'react-redux';
import { getContent,addFavorite } from '../actions/newsAction';
import Spinner from './common/Spinner'
import NewsLayout from './NewsLayout';


class Home extends React.Component {


    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);   
        this.favoriteClick = this.favoriteClick.bind(this);

        this.state={
          url:""
        }
    }


  componentDidMount(){
      console.log("Called");
        this.props.getContent(); 
  }

  componentWillReceiveProps(nextProps){
    console.log("Recieved")
    if(nextProps.content){
      this.setState({con:nextProps.content.content})
    }

    if(nextProps.favorites){
      console.log(this.props.favorites)
    }
    
}

onClick(e){
  this.setState({url:e});
}

favoriteClick(e,f){
  console.log(e);
  this.props.addFavorite(e,f); 
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
    content:state.content,
    favorites:state.favorites
})

export default connect(mapStateToProps,{getContent,addFavorite})(Home);