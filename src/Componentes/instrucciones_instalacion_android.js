import { StyleSheet, View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import backBtn from '../../assets/backBtn.png'; 
import solfium from '../../assets/solfium.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class InstruccionesInstalAndroid extends React.Component {

 
  render() {
	return (

 

  <View style={styles.container}>	
  
  <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:1}}>	

  <Text style={{ color: 'black',
                    fontSize: hp('1.8%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('2%'),
                    fontWeight: 'bold',
                    padding: hp('0%'),
                    textAlign: 'center',
                    height: hp('8%'),
                    textAlign: 'left'
                    }} h1>Instrucciones para Android temporales durante la fase de lanzamiento:{"\n"}{"\n"}</Text>
     
      <Text style={{ color: 'black',
                    fontSize: hp('1.8%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('0%'),
                    padding: hp('0%'),
                    textAlign: 'left',
                    height: hp('22%'),
                    textAlign: 'left'
                    }} h1>1.- Antes de proceder a la instalación, hay que acceder a opciones de "Configuración", que normalmente es el icono de engranaje. Luego
                    nos dirigimos a la opción "Seguridad" y nos desplazamos hacia abajo, a "Fuentes desconocidas". Elegimos la opción "Permitir instalación 
                    de aplicaciones de fuentes alternativas" y pulsamos "Aceptar", si es que aparece algún cuadro que pida tu confirmación.
                   {"\n"}{"\n"}{"\n"}{"\n"}</Text>
  
      <Text style={{ color: 'blue',
                  fontSize: hp('1.8%'),
                  marginHorizontal: wp('0%'),
                  marginTop:hp('0%'),
                  padding: hp('0%'),
                  textAlign: 'left',
                  height: hp('8%'),
                  textAlign: 'left'
                  }}
                  onPress={() => {Linking.openURL('https://apps.apple.com/es/app/testflight/id899247664')}}>
                    
                    2.- Enlace de descarga de APK.{"\n"} {"\n"}
                   
      </Text>
      <Text style={{color: 'black',fontSize: hp('1.7%')}}
       
             >
          https://apps.apple.com/es/app/testflight/id899247664{"\n"}{"\n"}

      
    </Text>
   
      
      <View style={{alignItems:'center', justifyContent:'center'}}>  
                
                <Image 
                  
                  source={solfium}
                  style={{aspectRatio:1, height:hp('7%'), marginTop:hp('0%'), marginLeft:wp('0%')}}
                  
                  >    
                </Image>  
      
               </View> 
   
       <Text style={{ color: 'black',
                  fontSize: hp('1.8%'),
                  marginHorizontal: wp('0%'),
                  marginTop:hp('0%'),
                  padding: hp('0%'),
                  textAlign: 'center',
                  height: hp('30%'),
                  textAlign: 'center',
                  fontWeight: 'bold',
                  justifyContent:'center',
             
                  }} h1>{"\n"}{"\n"}{"\n"}Felicidades por ser parte de este lanzamiento único y exclusivo, 
                  muy pronto la nueva versión estará en el App Store simplificando todo este proceso y al alcance de todos...</Text>
   
   </View>
          
  {/*Botón*/}     
  <View style={{alignItems:'center', flex:0.1,  justifyContent:'center', flexDirection:'row', marginBottom:hp('3%'),marginTop:hp('0%')}}>  
                

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

  backgroundVideo: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    width:'100%'
   
  },
   
  
})


