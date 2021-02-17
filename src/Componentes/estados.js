import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import backBtn from '../../assets/backBtn.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class Estados extends React.Component {

 
  render() {
	return (


  <View style={styles.container}>	
  
   <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:1}}>	

   

                    <Text style={{ color: 'black',
                    fontSize: hp('2%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('4%'),
                    padding: hp('0%'),
                    textAlign: 'left',
                    height: hp('100%'),
                    textAlign: 'center',
                    fontWeight:'bold'
                 
                    }} h1>
                    1/8 Cliente realiza cálculo inicial{"\n"}{"\n"}

                    ⬇️{"\n"}{"\n"}

                    2/8 Cliente interesado{"\n"}{"\n"}
                    ⬇️{"\n"}{"\n"}

                    3/8 Cliente chat primera vez instalador{"\n"}{"\n"}
                    ⬇️{"\n"}{"\n"}

                    4/8  Cita confirmada con instalador{"\n"}{"\n"}
                    ⬇️{"\n"}{"\n"}

                    5/8  Identidad instalador confirmada{"\n"}{"\n"}
                    ⬇️{"\n"}{"\n"}

                    6/8  Oferta aceptada{"\n"}{"\n"}
                    ⬇️{"\n"}{"\n"}

                    7/8  Pago único realizado{"\n"}{"\n"}
                    ⬇️{"\n"}{"\n"}

                    8/8  instalación realizada{"\n"}{"\n"}
               
                
                </Text>
   </View>
          
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


   </View>	



   )}
}

const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#F5D3AB',
    marginTop: "0%",
    alignItems:'center'},
  
  
})


