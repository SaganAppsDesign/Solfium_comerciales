import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo2.jpg'; 
import logo from '../../assets/logo_blanco.png'; 
import Fire, {db} from '../../fire';
import { Card } from 'native-base';
import { TextInput } from 'react-native-paper'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var screen
export var codigo_agente
var id

console.log("Fire.getUid() fuera del export",id)

export class SplashScreen extends React.Component {

  state = {

    name: '',
    codigo_agente:'',
    id:''
    
   
  }

agentCode = codigo_agente => this.setState({ codigo_agente});
  
  

 render() {


  db.ref('Agentes_comerciales/' +  Fire.getUid()).update({
    
    
    id:Fire.getUid()
   
    
    })

  var id = Fire.getUid() 
    
  //console.log("Fire.getUid() estado render", this.state.id)
  //console.log("Fire.getUid() variable id render", id)
  var name = this.state.name
  codigo_agente = this.state.codigo_agente


   //console.log("codigo agente: ",  codigo_agente )

  
  if (name){

    
     screen = 'Home'
    
         
    } else {
     
      screen = 'Registro nombre'     
      
    }


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
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('0%'), padding:hp('1%')}} 
                    
                      onPress={() => this.props.navigation.navigate("Video informativo")}>¿Quieres saber cómo funciona Solfium? Click aquí
                      
                  </Text>
                  
                </View> 

                { /* CÓDIGO AGENTE*/}

                  <View  style={{justifyContent:'center',width:wp('100%'),borderRadius:10, alignItems:'center', flex:0.8, marginTop:hp('1.5%'), alignContent:'center', textAlignVertical:'center'}}>
                  <Text 
                      style={{justifyContent:'center',textAlign:'center', fontWeight:'bold', textAlignVertical:'center', alignContent:'center', fontSize:hp('4%'), width:wp('70%'), height: hp('8%'), 
                              color: 'black',  marginBottom: hp('0%'),  marginTop:hp('0%'), paddingTop:hp('1.8%'),backgroundColor:'white'}} 
                    
                    >{(id).slice(0, 6)}
                      
                  </Text>
                  
                </View> 

                { /* Instrucciones de instalación de la APP*/}

                 <View  style={{borderRadius:10, alignItems:'center', flex:0.5, marginTop:hp('2%')}}>
                  <Text 
                      style={{textAlign:'center',  fontSize:hp('1.7%'), width:wp('100%'), height: hp('100%'), 
                              color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('0%'), padding:hp('1%')}} 
                    
                      onPress={() => this.props.navigation.navigate("Instrucciones instalación APP")}>Instrucciones de instalación de la APP
                      
                  </Text>
                  
                </View>                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:8, width:wp('100%'), height:hp('100%')}}>


                
                { /* LOGO*/}
  
                <View style={{alignItems:'center', justifyContent:'center',flex:1}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, height:hp('5%'), marginTop:hp('0%')}}
                  
                  >    
                </Image>  
      
               </View> 

               { /*     
               <TextInput
                style={styles.nameInput2}
                label="Código agente"
                onChangeText={this.agentCode}
                value={this.state.codigo_agente}
                returnKeyType={ 'done' }
                theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                                
              />
                    
                
                <View  style={{opacity:0.5, alignItems:'center', flex:0.3,  justifyContent:'center', marginBottom:hp('20%')}}>
                      <TouchableOpacity 

                            disabled={false} 
                                                                                  
                            onPress={() => this.props.navigation.navigate("Clientes")}
                              > 
                           
                             
                              <Text
                                    
                                    style={{fontWeight:'bold', fontSize:hp('3%'),  textAlign:'center'}}
                                    
                                    > Entra a panel de Clientes   </Text>

                       </TouchableOpacity>
                  </View>
                 */}    
                    { /* Lista de clientes*/}

                    <View style={{flex:10, width:wp('100%'), height:hp('100%'), alignItems:'center',  marginTop:  hp('1%'),
                          
                        }}> 
                     
                           
                       <FlatList style={{height:hp('100%'), marginBottom: hp('5%') }}
                       
                             data={this.state.list} 
                             initialNumToRender={100}
                             renderItem={({ item }) => {
                               //console.log(item)
                               
                                                            
                             if ((id).slice(0, 6) == item.codigo_agente) {
                            
                               
                               return (

                             <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('15%'),width:wp('84%'), flex:1}}> 
                      
                                                  
                               <View style={{ backgroundColor:'#ECA831',width:wp('84%'), flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                   <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>{item.name}</Text> 
                               </View>    
                               <View style={{ backgroundColor:'#9ECAFF',width:wp('84%'), flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                   <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>Estado del proceso</Text> 
                               </View> 
                              
                                         

                               <View style={{height:hp('9%'), width:wp('100%'), paddingLeft:hp('2%'), paddingRight:hp('2%'), marginBottom:hp('0%'), flex:1.7, justifyContent:'center',alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                                     <Text>
                                       
                                         <Text style={{color:'green', fontSize:hp('1.5%'), fontWeight:'bold'}}> {item.estado_cliente} </Text> 
                                   </Text> 
                               </View>
                               
                             
                             </Card> 
                                 )  

                             }
                           
                            
                           }

                  
                   } />

           
             </View>
       
        </View>
                   
  </View>


    </ImageOverlay> 

  );
}

componentDidMount(){

  this.setState({id:Fire.getUid()})
  //this.listener = Fire.getUid()
  //console.log("Fire.getUid() did mount estado", this.state.id)
  //console.log("Fire.getUid() did mount a pelo", Fire.getUid())
     
    
  db.ref('/Usuarios/').on('value', (snapshot) =>{
    var li = []
                
      snapshot.forEach((child)=>{
       li.push({

        
                key: child.key,
                name:child.val().name,
                codigo_agente:child.val().codigo_agente,
                estado_cliente:child.val().estado_cliente
       
        
      })
    })

 this.setState({list:li})
  
})

const ref = db.ref('/Agentes_comerciales/' +  Fire.getUid());

this.listener = ref.on("value", snapshot => {

this.setState({id: snapshot.child("id").val() || '' ,
                })    

console.log("Fire.getUid() did mount id", this.state.id)
}
)
     

}

}


const styles = StyleSheet.create({
 
  nameInput: {
    height: 70,
    marginLeft: hp('0%'),
    marginTop:hp('0%'),
    marginBottom:hp('5%'),
    width:wp('80%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    fontSize:hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },

  nameInput2: {
    height:hp('8%'),
    marginLeft: hp('0%'),
    marginTop:hp('3%'),
    marginBottom:hp('5%'),
    width:wp('65%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    fontSize:hp('2.5%'),
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },
 

  buttonText: {
// marginLeft: hp('30%'),
    marginTop:hp('2%'),
    fontSize: hp('2%'),
    marginBottom:hp('0%'),
    fontWeight:'bold',
    
    width:wp('25%'),
    height:hp('4%'),
    
    textAlign:'center'
    
  },
});
