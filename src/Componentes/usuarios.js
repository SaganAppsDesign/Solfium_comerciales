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

import {codigo_agente} from './splash_screen'




export class Usuarios extends React.Component {

 
    constructor(props) {
        super(props)
        this.state = {
          list: [],
          nombre:''      
                 
        }
        
      }


  


  render() {

    db.ref('Agentes_comerciales/' +  Fire.getUid()).update({
    
    
      name: "Agente comercial",
 
     
      
      })


    return (

      


   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>

          
                    <View style={{flex:1.5}}>
                          <Text style={{ marginTop:  hp('3%'), color:'white', fontSize:hp('2.3%')}}>Agente {codigo_agente}, bienvenido/a a su sesión</Text> 
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
                              initialNumToRender={100}
                              renderItem={({ item }) => {
                                console.log(item)
                                
                                                             
                               if (codigo_agente == item.codigo_agente) {
                                
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
                  codigo_agente:child.val().codigo_agente,
                  estado_cliente:child.val().estado_cliente
         
          
        })
      })

   this.setState({list:li})
    
  })
       

 }



}


