import * as React from 'react';
import {useState} from 'react';
import Shop from './Shop';
import { View, Text,StyleSheet,Image,TouchableOpacity,FlatList ,ScrollView,TextInput} from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: "#d7fbe8",
  
  },
  
  ilist:{
    marginTop:30,
    
  },
   subcontainer1:{
    
    color:'#1fab89',
    padding:20,
    
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight:'bold',
    fontSize:20,
  },
  button:{
    backgroundColor:'#62d2a2',
    color:'white',
    padding:5,
    
    
    alignItems:'center',
    justifyContent:'center',

  },
   subcontainer2:{
    
    marginBottom:100,

   

  },
},)
export default class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itemArray:[],
      itemNew:'',
    }
  }
  render(){
  
  let items=this.state.itemArray.map((val,key)=>{
      return<Shop key ={key} keyval={key} val={val}
      deleteMethod={()=>this.deleteItem(key)}/>
  });
  
  return(
    <View style={styles.main}>
    <View style={styles.ilist}>
    
    <View style={{marginLeft:30,marginTop:30}}>
    <TouchableOpacity 
         onPress={()=>this.props.navigation.navigate('Main1')}>
        
         <Image source={require('../assets/goback.png') } style={{width:30}}/>
         </TouchableOpacity></View>
    <Text style={styles.subcontainer1}> Shopping List</Text>
    <View style={{flexDirection:'row',marginHorizontal:8,marginVertical:12,
    justifyContent:"center",
    alignItems:"center"}}>
    <TextInput style={{ height: 40, 
      
     alignItems:'center',
     justifyContent:'center', 
     backgroundColor:'#62d2a2',
     color:'white',
     width:'85%' }}
     placeholder="  Enter the item name:"
     onChangeText={(itemNew)=>this.setState({itemNew})}
     value={this.state.itemNew}/>
    <Text> </Text>
    <TouchableOpacity onPress={this.addItem.bind(this)}
        style={styles.button}>
        <Text
        style={styles.button}> Add </Text>
      
      
      </TouchableOpacity>
      </View>
    
      
       
    
    </View>
    <ScrollView style={styles.subcontainer2}>{items}
    </ScrollView>

    </View>
    
  );}
  addItem(){
    if(this.state.itemNew){
      this.state.itemArray.push({'item':this.state.itemNew});
      this.setState({itemArray: this.state.itemArray});
      this.setState({itemNew:''});

    }
  }
  deleteItem(key){
    this.state.itemArray.splice( key,1);
    this.setState({itemArray:this.state.itemArray})
  }
}