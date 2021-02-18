import * as React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo.jpg'; 
import ios from '../../assets/ios.png'; 
import android from '../../assets/android.png'; 
import logo from '../../assets/logo_blanco.png'; 
import Fire, {db} from '../../fire';
import { Card } from 'native-base';
import { codigoLetras } from './funcion_codigo_letras'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var opacity, id
var codigo


export class SplashScreen extends React.Component {

  constructor(props){  
    super(props);  
    this.state = {  
      usuario:'',
      list: [],
      codigo:'----',
      snapshot:'',
      num:''
      }  

       
  }

  darAltaCodigoBBDD (){
    
    db.ref('Agentes_comerciales/' +  Fire.getUid()).update({
    
    
      id: codigo,
     
    
    })}


recuperarNumeros (id){

  var num = ""
  codigo = ""

  for (let step = 0; step < 28; step++) {
    
     if (id[step] == "0" || id[step]== "1" || id[step]== "2" || id[step]== "3" || id[step]== "4" || id[step]== "5" || id[step]== "6" || id[step]== "7" || id[step]== "8"
     || id[step]== "9"){

        num = num +  id[step]
     }
    
                  
  }


    if(num.length == 0){

      num = num + codigoLetras(id.slice(1,2)) + codigoLetras(id.slice(2,3)) + codigoLetras(id.slice(3,4))
      
      return num
  
  }  

  if(num.length == 1){

    num = num + codigoLetras(id.slice(1,2)) + codigoLetras(id.slice(2,3)) + codigoLetras(id.slice(3,4))
    
    return num

}

  if(num.length == 2){

     num = num + codigoLetras(id.slice(2,3)) + codigoLetras(id.slice(3,4))
    return num}


  if(num.length == 3){

      num = num +  codigoLetras(id.slice(3,4)) 
      return num

  }


  if(num.length >= 4){

    num = num.slice(0,4)
    return num

  } 
 

}



 render() {
  
   
  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  

                { /* ¿Quieres saber cómo funciona Solfium? Click aquí*/}

               <View  style={{borderRadius:10, alignItems:'center', flex:0.5, marginTop:hp('4%')}}>
                  <Text 
                      style={{textAlign:'center',  fontSize:hp('1.9%'), width:wp('100%'), height: hp('100%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('1%'), padding:hp('1%')}} 
                    
                      onPress={() => this.props.navigation.navigate("Video informativo")}>¿Quieres saber cómo funciona Solfium? Click aquí
                      
                  </Text>
                  
                </View> 

                { /* CÓDIGO AGENTE*/}

                  <View  style={{opacity:opacity, justifyContent:'center',width:wp('100%'),borderRadius:10, alignItems:'center', flex:0.8, marginTop:hp('4%'), alignContent:'center', textAlignVertical:'center'}}>
                  
                 
                  <Text selectable={true} selectionColor='orange'
                      style={{justifyContent:'center',textAlign:'center', fontWeight:'bold', textAlignVertical:'center', alignContent:'center', fontSize:hp('5%'), width:wp('40%'), height: hp('8%'), 
                              color: 'black',  marginBottom: hp('0%'),  marginTop:hp('1%'), paddingTop:hp('1%'),backgroundColor:'white'}} 
                    
                    >{this.state.codigo}
                      
                  </Text>
               
                </View> 

                <View  style={{opacity:1, alignItems:'center', flex:1,  justifyContent:'center', marginTop:hp('3%')}}>
                      <TouchableOpacity 

                            disabled={false} 
                                                                       
                            onPress={() => {

                              id = Fire.getUid() 
                              codigo = this.recuperarNumeros (id)
                              this.setState({codigo:codigo.slice(0,4)})
                              this.darAltaCodigoBBDD ()

                             }
                                }
                            
                              > 
                                                        
                              <Text
                                    style={{fontWeight:'bold', fontSize:hp('2.8%'),  textAlign:'center', borderWidth:hp('0.1%'), padding:hp('1%')}}
                                                                      
                                    >Pulsar aquí para ver código</Text>

                       </TouchableOpacity>
                  </View>
               
                <View  style={{alignItems:'center', flex:0.3, marginTop:hp('0%')}}>
                  <Text 
                      style={{textAlign:'center',  fontSize:hp('2%'), width:wp('100%'), height: hp('5%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('1%'), padding:hp('1%')}} 
                    
                      > ⬇️  Instrucciones de descarga  ⬇️
                      
                  </Text>
                  
                </View>     
                <View  style={{borderRadius:10, alignItems:'center', flex:1, flexDirection:"row",  marginTop:hp('5%')}}>
                { /* Instrucciones de instalación de la APP IOS*/}
                <View  style={{alignItems:'center', flex:1,  justifyContent:'center', marginRight: wp('0%')}}>
                             <TouchableOpacity 
                                                                                          
                                onPress={() => this.props.navigation.navigate("Instalación IOS")}
                               > 
                                                     
                               <Image 
                                
                                source={ios}
                                style={{aspectRatio:1, height:hp('6%')}}
                                
                                >    
                                </Image>

                                      
                                              
                            </TouchableOpacity> 
        
                </View>
             

                { /* Instrucciones de instalación de la APP Android*/}
                <View  style={{alignItems:'center', flex:1,  justifyContent:'center', marginLeft: wp('0%')}}>
                    <TouchableOpacity 
                                                                                
                      onPress={() => this.props.navigation.navigate("Instalación Android")}
                      > 
                                            
                      <Image 
                      
                      source={android}
                      style={{aspectRatio:1.2, height:hp('6%')}}
                      
                      >    
                      </Image>

                            
                                    
                  </TouchableOpacity> 

                </View>

             
                </View>  
                { /* ESTADOS DEL PROCESO DEL CLIENTE*/}
                <View  style={{borderRadius:10, alignItems:'center', flex:0.5, marginBottom:hp('3%'), marginTop:hp('1%')}}>
                  <Text 
                      style={{textAlign:'center',  fontSize:hp('1.8%'), width:wp('100%'), height: hp('5%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('1%'), padding:hp('1%')}} 
                    
                      onPress={() => this.props.navigation.navigate("Estados del proceso")}>Información sobre los diferentes estados del proceso
                      
                  </Text>
                  
                </View>  

                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:8, width:wp('100%'), height:hp('100%')}}>
               
                { /* LOGO*/}
  
                <View style={{alignItems:'center', justifyContent:'center',flex:2, marginTop:hp('2%')}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, height:hp('9%'), marginTop:hp('0%')}}
                  
                  >    
                </Image>  
      
               </View> 

             
             { /* Lista de clientes*/}

                    <View style={{flex:10, width:wp('100%'), height:hp('100%'), alignItems:'center',  marginTop:  hp('1%'),
                          
                        }}> 
                     
                           
                       <FlatList style={{height:hp('100%'), marginBottom: hp('5%') }}
                             ItemSeparatorComponent={
                              Platform.OS !== 'android' &&
                              (({ highlighted }) => (
                                <View
                                  style={[
                                    color='black',
                                    highlighted && { marginLeft: 0 }
                                  ]}
                                />
                              ))
                            }
                             data={this.state.list} 
                             initialNumToRender={100}
                             
                             renderItem={({item }) => {
                             
                                                                                         
                             if (this.state.codigo == item.codigo_agente) {

                         
                               return (

                             <Card style={{alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('15%'),width:wp('84%'), flex:1}}> 
                      
                                                  
                               <View style={{ backgroundColor:'#ECA831',width:wp('84%'), flex:0.6, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                   <Text style={{fontWeight:'bold', fontSize:hp('2.5%'),  textAlign:'center'}}>{item.name}</Text> 
                               </View>  
                               <View style={{ backgroundColor:'#9ECAFF',width:wp('84%'), flex:0.6, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                               
                               
                                   <Text style={{fontWeight:'bold', fontSize:hp('1.7%'),  textAlign:'center'}}>Estado del proceso</Text> 
                            
                            
                               </View>     
                               <View style={{ backgroundColor:'#fff',width:wp('84%'), flex:0.6, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                               
                               
                               <Text style={{ fontSize:hp('1.7%'),  textAlign:'center'}}>{item.estado_cliente}</Text> 
                        
                        
                           </View>   

                                                           
                             
                             </Card> 
                                 )  

                             }
                            }
                            
                           }

                  
                    />

           
             </View>
       
        </View>
                   
  </View>


</ImageOverlay> 

  )
}

componentDidMount(){


  //Recuperar datos del cliente
  const ref2 = db.ref('/Usuarios/')
  
   ref2.on('value', (snapshot) =>{
    var li = []
                
      snapshot.forEach((child)=>{
       li.push({

        
                key: child.key,
                name:child.val().name,
                estado_cliente:child.val().estado_cliente,
              
                codigo_agente:child.val().codigo_agente 
       
        
      })
    })

 this.setState({list:li})
  
})


     

}

}