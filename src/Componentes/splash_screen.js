import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo2.jpg'; 
import logo from '../../assets/logo_blanco.png'; 
import {db} from '../../fire';
import { TextInput } from 'react-native-paper'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var screen
export var codigo_agente


export class SplashScreen extends React.Component {

  state = {

    name: '',
    codigo_agente:''
    
   
  }

agentCode = codigo_agente => this.setState({ codigo_agente});
  
  

 render() {

  

  var name = this.state.name
  codigo_agente = this.state.codigo_agente


   //console.log("codigo agente: ",  codigo_agente )

  
  if (name==""){

    
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
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:8, width:wp('100%'), height:hp('100%')}}>


                
                { /* LOGO*/}
  
                <View style={{alignItems:'center', justifyContent:'center',flex:4}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, height:hp('9%'), marginTop:hp('30%')}}
                  
                  >    
                </Image>  
      
               </View> 

                    
               <TextInput
                style={styles.nameInput2}
                label="Código agente"
                onChangeText={this.agentCode}
                value={this.state.Codigo_agente}
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
              
       
    </View>
                   
  </View>


    </ImageOverlay> 

  );
}


    componentDidMount() {


     /*  const ref = db.ref('/Instaladores/' +  Fire.getUid());

      this.listener = ref.on("value", snapshot => {

      this.setState({ name: snapshot.child("name").val() || '' }) 
                    
      console.log("NOMBREEEEE DIDMOUNT: ", this.state.name)
      console.log("Fire.getUid(): ", Fire.getUid())
    
    }
    ) 

    const ref = db.ref('/Agentes_comerciales/Nombre/');

    this.listener = ref.on("value", snapshot => {

    this.setState({ name: snapshot.child("name").val() || '',
                    codigo: snapshot.child("Codigo_cliente").val() || '' }) 
                  
    //console.log("NOMBREEEEE DIDMOUNT: ", this.state.name)
    //console.log("Fire.getUid(): ", Fire.getUid())
  
  }
  )

*/


    }

}


const styles = StyleSheet.create({
 
  nameInput: {
    height: 70,
    marginLeft: hp('0%'),
    marginTop:hp('5%'),
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
