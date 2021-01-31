import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
//import VideoPlayer from 'react-native-video-controls';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import backBtn from '../../assets/backBtn.png'; 
import { Paragraph } from 'react-native-paper';




export class InstruccionesInstalAndroid extends React.Component {

 

  render() {
	return (

 

  <View style={styles.container}>	
  
   <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:1}}>	


   <Paragraph selectable={true} selectionColor='orange'>
        Instrucciones para Iphone temporales durante la fase de lanzamiento:

        1.- Descarga e instala la APP TestFlight en tu Iphone: https://apps.apple.com/es/app/testflight/id899247664 (David, pon por favor el icono de la app testflight para que no haya dudas)

        2.- Envía al correo "antonio.cabrera@soologic.com" el email asociado a tu Apple ID que puedes encontrar en Configuración de tu Iphone 

        3.- Abrir el enlace que te llegará por correo electrónico y comenzará la descarga

        4.- Ejecutar la aplicación Solfium, bien directamente o desde TestFlight (David, pon el icono de la app de Solfium cliente)

        Felicidades por ser parte de este lanzamiento único y exclusivo, muy pronto la nueva versión estará en el App Store simplificando todo este proceso y al alcance de todos..

  </Paragraph>
   </View>
{/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('3%'),marginTop:hp('0%')}}>  
                         

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

  backgroundVideo: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    width:'100%'
   
  },
  
    
    
    
  
});


