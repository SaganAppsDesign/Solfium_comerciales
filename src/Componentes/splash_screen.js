import * as React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo.jpg'; 
import ios from '../../assets/ios.png'; 
import android from '../../assets/android.png'; 
import logo from '../../assets/logo_blanco.png'; 
import Fire, {db} from '../../fire';
import { Card } from 'native-base';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var opacity, id
var num

export class SplashScreen extends React.Component {

  constructor(props){  
    super(props);  
    this.state = {  
      usuario:'',
      codigoFinalState:'',
      list: [],
      codigo:'Loading...',
      snapshot:""
      }  

       
  }



recuperarNumeros (id){

  var num = ""

  for (let step = 0; step < 28; step++) {
    
     if (id[step] == "0" || id[step]== "1" || id[step]== "2" || id[step]== "3" || id[step]== "4" || id[step]== "5" || id[step]== "6" || id[step]== "7" || id[step]== "8"
     || id[step]== "9")
         num = num +  id[step]
     
         
  }

  console.log(" num total", num.length);

  if(num.length >= 4){

    num = num.slice(0,4)
    return num

  } 

  if(num.length == 1){

    num = num + 167
    return num

}

  if(num.length == 2){

    num = num + 19
    return num}


  if(num.length == 3){

      num = num + 1
      return num

  }
 


}

 
 render() {

  id = Fire.getUid() 
  // console.log(id)
  num = this.recuperarNumeros (id)
  
  console.log(id)
  console.log(num)
 //console.log(num.length)
  
   
  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  

                { /* ¿Quieres saber cómo funciona Solfium? Click aquí*/}

               <View  style={{borderRadius:10, alignItems:'center', flex:0.5, marginTop:hp('5%')}}>
                  <Text 
                      style={{textAlign:'center',  fontSize:hp('1.7%'), width:wp('100%'), height: hp('100%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('1%'), padding:hp('1%')}} 
                    
                      onPress={() => this.props.navigation.navigate("Video informativo")}>¿Quieres saber cómo funciona Solfium? Click aquí
                      
                  </Text>
                  
                </View> 

                { /* CÓDIGO AGENTE*/}

                  <View  style={{opacity:opacity, justifyContent:'center',width:wp('100%'),borderRadius:10, alignItems:'center', flex:0.8, marginTop:hp('4%'), alignContent:'center', textAlignVertical:'center'}}>
                  
                 
                  <Text selectable={true} selectionColor='orange'
                      style={{justifyContent:'center',textAlign:'center', fontWeight:'bold', textAlignVertical:'center', alignContent:'center', fontSize:hp('5%'), width:wp('40%'), height: hp('8%'), 
                              color: 'black',  marginBottom: hp('0%'),  marginTop:hp('1%'), paddingTop:hp('1%'),backgroundColor:'white'}} 
                    
                    >{num}
                      
                  </Text>
               
                </View> 
               
                <View  style={{alignItems:'center', flex:0.3, marginTop:hp('0%')}}>
                  <Text 
                      style={{textAlign:'center',  fontSize:hp('2%'), width:wp('100%'), height: hp('5%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('3%'), padding:hp('1%')}} 
                    
                      > ⬇️  Instrucciones de descarga  ⬇️
                      
                  </Text>
                  
                </View>     
                <View  style={{borderRadius:10, alignItems:'center', flex:1, flexDirection:"row",  marginTop:hp('6%')}}>
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
                      style={{textAlign:'center',  fontSize:hp('1.7%'), width:wp('100%'), height: hp('5%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('1%'), padding:hp('1%')}} 
                    
                      onPress={() => this.props.navigation.navigate("Estados del proceso")}>Información sobre los diferentes estados del proceso
                      
                  </Text>
                  
                </View>  

                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:8, width:wp('100%'), height:hp('100%')}}>
               
                { /* LOGO*/}
  
                <View style={{alignItems:'center', justifyContent:'center',flex:2, marginTop:hp('0%')}}>  
                
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
                             
                             renderItem={({item, separators }) => {

                              //console.log("item", item.estado_cliente1)
                              //console.log("key", item.key)
                              //console.log("index", item.index)
                             
                                                                                         
                             if (num == item.codigo_agente) {

                         
                               return (

                             <Card style={{alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('15%'),width:wp('84%'), flex:1}}> 
                      
                                                  
                               <View style={{ backgroundColor:'#ECA831',width:wp('84%'), flex:0.6, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                   <Text style={{fontWeight:'bold', fontSize:hp('2.5%'),  textAlign:'center'}}>{item.name}</Text> 
                               </View>  
                               <View style={{ backgroundColor:'#9ECAFF',width:wp('84%'), flex:0.6, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                               
                               
                                   <Text style={{fontWeight:'bold', fontSize:hp('1.7%'),  textAlign:'center'}}>Estado del proceso</Text> 
                            
                            
                               </View>     
                               <View style={{ backgroundColor:'#fff',width:wp('84%'), flex:0.6, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                               
                               
                               <Text style={{ fontSize:hp('2%'),  textAlign:'center'}}>{item.estado_cliente}</Text> 
                        
                        
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

  );
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



