import React from 'react';
import {
  FlatList,
  View,
  Image,Text

} from 'react-native';

import { Card } from 'native-base';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../../assets/logo.png'; 
import {db} from '../../fire';
import fondo from '../../assets/fondo.jpg'; 
import {fecha} from './calendario';
import {potenciaSistema} from './viabilidad';
import {nombreFire} from '../../fire';
import {consumoMensual} from './consumo_mensual';
import {codigo_agente} from './splash_screen'





export class Usuarios extends React.Component {

 
    constructor(props) {
        super(props)
        this.state = {
          list: [],
          nombre:''
                 
        }
        
      }


      goToChat(key) {
        global.idCliente = key;
        this.props.navigation.navigate('Chat');
      }




      cita(key) {
        if (this.state.clickCita==true){
          db.ref('/Usuarios/' + key).update({
            cita: fecha,
            nombre_instalador: this.state.nombre
             })
  
    
             this.setState({
               clickCita: false
  
          })
  
        } else{
  
          db.ref('/Usuarios/' + key).update({
     
            cita: "",
            nombre_instalador: this.state.nombre
   
             })
              this.setState({
              clickCita: true
  
          })
   
        }
        
    
       }

 

  render() {

     
    //console.log("nuevoMensaje RENDER", this.state.nuevoMensaje)
    return (

      


   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>

          
                    <View style={{flex:1.5}}>
                          <Text style={{ marginTop:  hp('3%'), color:'white', fontSize:hp('2.3%')}}>{codigo_agente}, bienvenido/a a su sesión</Text> 
                   </View>    

                   <View style={{marginTop:  hp('0%'), flex: 1, width:wp('100%'), height:wp('10%'), alignItems:'center', marginBottom: hp('1%')
                          
                         }}> 

                                  <Image 

                                        source={logo} style={{
                  
                                          aspectRatio:2.8,
                                          height: hp('5%'),
                                          marginBottom: hp('0%'),
                                          marginTop:  hp('0%'),
                                          borderRadius: 10
                                         
                                                                      
                                        }}
                                  >
                                    
                                  </Image>
                        
                      </View> 
                      
                      <View style={{flex:15, width:wp('100%'), height:hp('100%'), alignItems:'center',  marginTop:  hp('1%'),
                          
                         }}> 
                      
                            
                        <FlatList style={{height:hp('100%'), marginBottom: hp('15%') }}
                        
                              data={this.state.list} 
                              
                              renderItem={({ item }) => {

                                console.log("codigo_agente dentro de flatlist", codigo_agente)
                                console.log("codigo_agente item dentro de flatlist", item.codigo_agente)
                              
                               if (codigo_agente == item.codigo_agente) {
                                
                                return (

                              <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('15%'),width:wp('84%'), flex:1}}> 
                       
                                                   
                                <View style={{ backgroundColor:'orange',width:wp('84%'), flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>{item.name}</Text> 
                                </View>    
                                <View style={{ backgroundColor:'white',width:wp('84%'), flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>Código Agente: {item.codigo_agente}</Text> 
                                </View> 
                               
                                             

                                <View style={{height:hp('5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:1.5, justifyContent:'center',alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                                      <Text>
                                          <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Estado del proceso SOLFIUM: </Text> 
                                          <Text style={{ fontSize:hp('1.5%'), backgroundColor:'#28E10B'}}> {item.visita} </Text> 
                                    </Text> 
                                </View>
                                
                              
                              </Card> 
                                  )  

                              }}

                   
                    } />

            
              </View>
            
              </View>

 
  </ImageOverlay>
      
    );

   
  }


  componentDidMount(){
           
    
    db.ref('/Usuarios/').on('value', (snapshot) =>{
      var li = []
                  
        snapshot.forEach((child)=>{
         li.push({

          
                  key: child.key,
                  name:child.val().name,
                  codigo_agente:child.val().Codigo_agente
         
          
        })
      })



      
     


   this.setState({list:li})
  
  
  })
  
      

 }



}


