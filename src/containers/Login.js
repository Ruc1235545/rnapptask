import { placeholder } from '@babel/types';
import React,{Component} from 'react';
import {View,Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component{
    render(){
        return(
            <View style={[TestStyle.mainContainer]}>
                <View style={[TestStyle.bodyContainer]}>
                    <Image source={require("../assets/images/2.jpeg")} style={[TestStyle.imgLogin]} />
                    <View style={[TestStyle.textField,{marginTop:50}]}>
                        <TextInput placeholder="User Name" ></TextInput>
                    </View>
                    <View style={[TestStyle.textField]}>
                        <TextInput placeholder="Password" ></TextInput>
                    </View>
                    <TouchableOpacity style={[TestStyle.btnLogin]}>
                        <Text style={[TestStyle.loginText]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const TestStyle= StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: "white",
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textField: {
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 100,
    },
    btnLogin: {
        marginTop: 30,
        backgroundColor: "dimgrey",
        paddingHorizontal: 100,
        paddingVertical: 15,
        borderRadius: 50,
    },
    loginText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },
    imgLogin: {
        height: 100,
        width: 100,
        overflow: "hidden",
        borderRadius: 50,
    }

})