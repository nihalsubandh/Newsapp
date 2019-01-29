import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import like from './common/like.png';


class NewsLayout extends React.Component {


    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
        this.favoriteClick = this.favoriteClick.bind(this);
    }

    favoriteClick(){
        this.props.favoriteClick(this.props.title,this.props.desc)
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
        <TouchableHighlight onPress = { this.onClick }>
          <Text style={styles.text}>{this.props.title} </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress = { this.favoriteClick }>
        <Image source={like} />
        </TouchableHighlight>
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
        padding:10,
        fontWeight:"bold"
    },
    desc:{
        padding:10,
    }
  });


  
export default NewsLayout;