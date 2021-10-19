import { noop } from '@babel/types';
import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

export default class TodoList extends Component{
    constructor(props){
        super (props);
        this.state={
            inputValue: "",
            list: [
                     "kavita",
                
                     "ruchi",
            ]
        }
    }

    add(inputValue){
        inputValue= this.state.inputValue;
        let Arr= this.state.list;
        console.log("Arr,inputvalue",Arr,inputValue);
        Arr.push(inputValue);
        this.setState({List:Arr})
        console.log("List,inputvalue",this.state.List);
    }

    delete(i){
        let Arr = this.state.list;
        console.log("index",i);
        Arr.splice(1, i);
        console.log("Array", Arr);
        this.setState({list:Arr});
    }
  
    render(){
        return(
            <View style={[TestStyle.mainPage]}> 
                <TextInput style={[TestStyle.enterText]} placeholder= "Enter Your Name" value={this.state.inputValue} onChangeText={(inputValue)=>this.setState({inputValue})}/> 

                <TouchableOpacity style={[TestStyle.submit]} onPress={()=>this.add()}> 
                    <Text style={[TestStyle.submitText]}>Add</Text>
                </TouchableOpacity>
                {this.state.list.map((v,i)=>{
                        return(
                            <View key={i} style={[TestStyle.listData]}> 
                                <Text>{v}</Text>
                                <TouchableOpacity onPress={()=>this.delete(i)}>
                                    <Text style={[TestStyle.deleteBtnText]}>delete</Text>
                                </TouchableOpacity>
                            </View>
                        )
                })}
            </View>
        )
    }
}

const TestStyle= StyleSheet.create ({
    mainPage: {
        flex: 1,
        padding: 20,
    },
    enterText: {
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    listData: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    },
    deleteBtnText: {
        color: "red",
    },
    submit: {
        marginTop: 10,
        backgroundColor: "skyblue",
        padding: 10,
        marginHorizontal: 70,
        borderRadius: 30,
    },
    submitText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    }
})