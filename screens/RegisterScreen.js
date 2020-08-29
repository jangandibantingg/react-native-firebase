import React from 'react'
import { View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'



export default class RegisterScreen extends React.Component {
    state = {
         name : "",
         email : "",
         password : "",
         errorMessage : null
    };
    
    handleSignUp = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((userCredentials)=>{
        if(userCredentials.user){
          userCredentials.user.updateProfile({
            displayName: this.state.name
          }).then((s)=> {
            this.props.navigation.navigate('Account');
          })
        }
    })
    .catch(error => this.setState({errorMessage:error.message}));
    };
    
    render(){
        return(
            <View style={style.container}>
            
               <Text style={style.greeting}>
                    {`lets signup to get started`}
               </Text>

               <View style={style.errorMessage}>
                {this.state.errorMessage && <Text style={style.error} > {this.state.errorMessage} </Text> }
                </View>

                <View style={style.form}>
                     <View> 
                        <Text style={style.inputTittle}>Full Name</Text>
                        <TextInput style={style.input} autoCapitalize="none" 
                        onChangeText={name => this.setState({name})}
                        value={this.state.name} /> 
                    </View>
                    <View style={{marginTop: 32}}> 
                        <Text style={style.inputTittle}>Email Address</Text>
                        <TextInput style={style.input} autoCapitalize="none" 
                        onChangeText={email => this.setState({email})}
                        value={this.state.email} /> 
                    </View>
                    <View style={{marginTop: 32}}> 
                        <Text style={style.inputTittle}>Password</Text>
                        <TextInput style={style.input} autoCapitalize="none" secureTextEntry
                          onChangeText={password => this.setState({password})}
                          value={this.state.password} />  
                    </View>

                </View>

                <TouchableOpacity style={style.button} onPress={this.handleSignUp} >
                    <Text style={{color: "#FFF", fontWeight: "500"}} > Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf : "center", marginTop :32}} 
                onPress = {() => this.props.navigation.navigate("Login")}>
                    <Text>
                        Sudah Punya akun
                         <Text style={{ fontWeight : "500", color: "#E9446A"}}> Sign In</Text>
                    </Text>
                </TouchableOpacity>
            
            </View>

           
        );
    }

}

const style = StyleSheet.create({
    container:{
        flex : 1
    },
    greeting : {
        marginTop : 32,
        fontSize : 18,
        fontWeight : "400",
        textAlign : "center"
    },
    errorMessage : {
        height :72,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 30
    },
    form:{
        marginBottom : 48,
        marginHorizontal: 30
    },
    input : {
        height : 40,
        borderBottomColor : "8A8F9E",
        borderBottomWidth :  StyleSheet.hairlineWidth,
        fontSize: 15,
        color : "#161F3D"

    },
    inputTittle : {
        color : "#8A8F9E",
        fontSize : 10,
        textTransform : "uppercase"
       
    },
    button : {
        marginHorizontal : 30,
        backgroundColor : "#E9446A",
        borderRadius :4,
        height : 52,
        alignItems : "center",
        justifyContent : "center"

    },
    error : {
        color : "#E9446A",
        fontSize : 13,
        fontWeight : "600",
        textAlign : "center"
    }

   
});