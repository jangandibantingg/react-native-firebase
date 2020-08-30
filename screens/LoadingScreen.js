import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'

export default class LoadinScreen extends React.Component {
  
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Loading Screen</Text>
                <br></br>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    }
});