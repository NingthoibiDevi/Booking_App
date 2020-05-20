import * as React from 'react';
import {useState} from 'react';

import { View, Text,StyleSheet,Image,TouchableOpacity,FlatList ,ScrollView,TextInput} from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  n_container:{
    color:'white',
    
    


  },
  delete_s:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1fab89',
    padding:10,
    top:10,
    bottom:10,
    right:5,
    

  },
  item:{
      
      flexDirection:'row',
      padding:20,
      paddingRight:100,
      borderBottomWidth:2,
      borderBottomColor:'#1fab89',
      
      
      alignContent:'center',
      
  },
  item_s:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#1fab89',
  },
},)
export default class Shop extends React.Component{
  render(){
    return(
      <View key={this.props.keyval} style={styles.item}>
      <Text style={styles.item_s}>{this.props.val.item}</Text>
      <TouchableOpacity onPress={this.props.deleteMethod} 
      style={styles.delete_s}>
      <Text style={styles.n_container}>Delete</Text>
      </TouchableOpacity>

      </View>
      
      
    );
  }
}