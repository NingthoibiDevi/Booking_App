
import * as React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,FlatList ,ScrollView,StatusBar,Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Shop from './components/Shop';
import Cart from './components/Cart';

import {StackNavigator} from 'react-navigation';
import{createSwitchNavigator,createAppContainer} from 'react-navigation';
const styles = StyleSheet.create({
  
    
    
  container:{
    flex:1,
    
    marginTop:50,

  },
  subcontainer1:{
    color:'#1fab89',
    padding:10,
    
    alignContent:'center',
    textAlign:'center',
    justifyContent:'center',
    fontWeight:'bold',
    height:'7%',
    
    
    
  },
  subcontainer2:{
    
    marginHorizontal:10,
    padding:5,
    
    borderColor:'#62d2a2',
    marginVertical:1,
    
    textAlign:'center',
    backgroundColor:'#9df3c4',
    
    
    paddingTop:20,
    height:WIDTH,
    
    width:'100%',
    
    alignItems:'center',
    justifyContent:'center',
    borderLeftWidth:8,


    
    

  },
  shoplist:{
      
    height:'75%', 
    
    backgroundColor: "#d7fbe8",
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
    marginVertical:8,
    marginHorizontal:10,
    textAlign:'center',
    justifyContent:'flex-start',

      
      
  },
  booking:{

    backgroundColor:'#1fab89',
    padding:20,
    
    height:'30%',
    alignItems:'center',
    
      
      
  },
  bookinginner:{
    fontSize:28,
      fontWeight:'bold',
      color:'white',

  },
},
)
const AppSwitchNavigator=createSwitchNavigator({
  Main1:{screen:Main1},
  Cart:{screen:Cart},
});
const AppContainer=createAppContainer(AppSwitchNavigator);
 const shops=[
        {name:' Shop1 ',key:'1'},
        {name:' Shop2 ',key:'2'},
        {name:' Shop3 ',key:'3'},
        {name:' Shop4 ',key:'4'},
        {name:' Shop5 ',key:'5'},
      
    ];
const numColumns=2;
const WIDTH=Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;




function Main1({navigation}){
  return(
    <View style={styles.container}>
 
   
 <View style={styles.booking}>
    <Image source={require('./assets/logo.png') } style={{width:90,height:90}}/>
    <Text style={styles.bookinginner}>BOOKING APP</Text></View>
   
    <Text style={styles.subcontainer1}>
          Choose The Shop: </Text>
     <View style={styles.shoplist} >
     <FlatList
      data={shops}
      numColumns={numColumns}
      renderItem={({item})=>(
        <View >
         <TouchableOpacity 
         onPress={()=>navigation.navigate('Cart')}>
         <View style={styles.subcontainer2}> 
      
         <Image source={require('./assets/shop.png') } style={{width:30}}/> 
        <Text style={{
        borderTopWidth:2,
        
        borderTopColor:'#62d2a2',
       paddingRight:28,
       paddingLeft:28,
       textAlign:'center',
       
       }}>{item.name}
        
       <Image source={require('./assets/arrow.png')} />
        </Text>
        </View>
        
        </TouchableOpacity>
        </View> 
      )
      }
      />
  </View>
    </View>
  );
}



export default class App extends React.Component{
  
  
  render(){
  
   
    return(
    
    <AppContainer/>
    );
    
    }
}