import { StyleSheet, View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import backBtn from '../../assets/backBtn.png'; 
import solfium from '../../assets/solfium.png'; 
import { Paragraph } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export class Estados extends React.Component {

 

  render() {
	return (

 

  <View style={styles.container}>	
  
   <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:1}}>	

   
  
   </View>
    {/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.14,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%')}}>  
                         

                          <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                             <TouchableOpacity 
                                                                                          
                                onPress={() => this.props.navigation.navigate("Atrás")}
                               > 
                                                     
                               <Image 
                                
                                source={backBtn}
                                style={{aspectRatio:1, height:hp('6%')}}
                                
                                >    
                                </Image>

                                      
                                              
                            </TouchableOpacity> 
        
                         </View>

                        
        
                               
        
                        </View>
                      
                      
          {/* FIN header */}     
 

   </View>	



   )}
}

// Later on in your styles..
const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#fff',
    marginTop: "0%",
    alignItems:'center'},

  
    
  
})


