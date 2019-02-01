import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import add from './common/add.png';
import remove from './common/remove.png';


class NewsLayout extends React.Component {


    constructor(props){
        super(props);
        
        this.onClick = this.onClick.bind(this);
        this.favoriteClick = this.favoriteClick.bind(this);
    }

    favoriteClick(){
      
        this.props.favoriteClick(
        this.props.img,this.props.title,this.props.desc,this.props.url,this.props.favorite)
      
    }

    onClick(){
        this.props.onClick(this.props.url);
    }
  
  render() {
      
    return (
    <View style={styles.view} >
      <TouchableHighlight onPress = { this.onClick }>
        <Image
          style={styles.stretch}
          source={{uri:this.props.img}}
        />
        </TouchableHighlight>
        
        <View style={styles.title}>
        <TouchableHighlight style={{flex:5}} onPress = { this.onClick }>
          <Text style={styles.text}>{this.props.title} </Text>
        </TouchableHighlight>
        <TouchableHighlight style={{flex:1}} onPress = { this.favoriteClick }>
        {!this.props.favorite? <Image  source={add} />: <Image source={remove} />}
        </TouchableHighlight>
        </View>
       
        <TouchableHighlight onPress = { this.onClick }>
        <Text style={styles.desc}>{this.props.desc} </Text>
        </TouchableHighlight>
        <Text style={{textAlign: 'right'}}>read more</Text>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
    view:{
        flex:1
    },
    stretch: {
       flex:1, 
      height: 200
    },
    text:{
        fontSize:15,
        fontWeight:"bold"
    },
    desc:{
        padding:10,
    },
    title:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
    }
  });


  
export default NewsLayout;