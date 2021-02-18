import { StyleSheet, View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import backBtn from '../../assets/backBtn.png'; 
import solfium from '../../assets/solfium.png'; 
import { Paragraph } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export class InstruccionesInstalIOS extends React.Component {

 

  render() {
	return (

 

  <View style={styles.container}>	
  
  <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:5}}>	
  <Paragraph selectable={true} selectionColor='orange' style={{textAlign: 'left'}}>

      <Text style={{ color: 'black',
                    fontSize: hp('1.8%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('2%'),
                    fontWeight: 'bold',
                    padding: hp('0%'),
                    textAlign: 'center',
                    height: hp('8%'),
                    textAlign: 'left'
                    }} h1>Instrucciones para Iphone temporales durante la fase de lanzamiento:{"\n"}{"\n"}</Text>
     
      <Text style={{ color: 'black',
                    fontSize: hp('1.8%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('0%'),
                    padding: hp('0%'),
                    textAlign: 'left',
                    height: hp('8%'),
                    textAlign: 'left'
                    }} h1>1.- Descarga e instala la APP TestFlight en tu Iphone:
                   {"\n"}{"\n"}</Text>

           
    <Text style={{color: 'blue',fontSize: hp('1.7%')}}
       
              onPress={() => {Linking.openURL('https://apps.apple.com/es/app/testflight/id899247664')
                
              
              }}>
          Descarga aquí{"\n"}{"\n"}

      
    </Text>

    <Text style={{color: 'black',fontSize: hp('1.7%')}}
       
             >
          https://apps.apple.com/es/app/testflight/id899247664{"\n"}{"\n"}

      
    </Text>

  
  
      <Text style={{ color: 'black',
                  fontSize: hp('1.8%'),
                  marginHorizontal: wp('0%'),
                  marginTop:hp('0%'),
                  padding: hp('0%'),
                  textAlign: 'left',
                  height: hp('8%'),
                  textAlign: 'left'
                  }} h1>2.- Envía al correo "info@solfium.com" el email 
                  asociado a tu Apple ID que puedes encontrar en "Configuración" de tu Iphone.{"\n"} {"\n"}</Text>
   

      <Text style={{ color: 'black',
                  fontSize: hp('1.8%'),
                  marginHorizontal: wp('0%'),
                  marginTop:hp('0%'),
                  padding: hp('0%'),
                  textAlign: 'left',
                  height: hp('8%'),
                  textAlign: 'left'
                  }} h1>3.- Abrir el enlace que te llegará por correo electrónico y comenzará la descarga.{"\n"}{"\n"}</Text>
   

      <Text style={{ color: 'black',
                  fontSize: hp('1.8%'),
                  marginHorizontal: wp('0%'),
                  marginTop:hp('0%'),
                  padding: hp('0%'),
                  textAlign: 'left',
                  height: hp('8%'),
                  textAlign: 'left'
                  }} h1>4.- Ejecutar la aplicación Solfium, bien directamente o desde TestFlight.{"\n"}{"\n"}{"\n"}</Text>
      
      <View style={{alignItems:'center', justifyContent:'center'}}>  
                
                <Image 
                  
                  source={solfium}
                  style={{aspectRatio:1, height:hp('7%'), marginTop:hp('-6%'), marginLeft:wp('36%'), marginBottom:hp('1%')}}
                  
                  >    
                </Image>  
      
               </View> 
   
       <Text style={{ color: 'black',
                  fontSize: hp('1.8%'),
                  marginHorizontal: wp('0%'),
                  marginTop:hp('0%'),
                  padding: hp('0%'),
                  textAlign: 'center',
                  height: hp('100%'),
                  textAlign: 'center',
                  fontWeight: 'bold',
                  justifyContent:'center',
              
                  }} h1>{"\n"}Felicidades por ser parte de este lanzamiento único y exclusivo, 
                  muy pronto la nueva versión estará en el App Store simplificando todo este 
                  proceso y al alcance de todos...</Text>
   
 
  </Paragraph>
   </View>
        
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.14,  justifyContent:'center', flexDirection:'row', marginBottom:hp('3%'),marginTop:hp('0%')}}>  
                         

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
  	backgroundColor: '#fff',
    marginTop: "0%",
    alignItems:'center'},
  
})


