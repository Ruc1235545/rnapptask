import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Info extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab: 1, 
    }
}

setTab(tab){
    console.log(".before.",tab);
    this.setState({selectedTab:tab},()=>{
        console.log(".after.",this.state.selectedTab);
    })
    console.log("outside", this.state.selectedTab); 
}

    render(){
        return(
            <View style={[TestStyle.mainContainer]}>
               
                <View style= {{flexDirection: "row"}}> 
                    <TouchableOpacity style={[TestStyle.btnTab,this.state.selectedTab==1? TestStyle.selectedBtnStyle: null]} onPress={()=>{this.setTab(1)}}>
                        <Text style={[{color:"white"},this.state.selectedTab==1? TestStyle.textBold: null]}>Chat</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[TestStyle.btnTab,this.state.selectedTab==2? TestStyle.selectedBtnStyle: null]} onPress={()=>{this.setTab(2)}}>
                        <Text style={{color:"white"}}>Status</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={[TestStyle.btnTab,this.state.selectedTab==3? TestStyle.selectedBtnStyle: null]} onPress={()=>{this.setTab(3)}}>
                        <Text style={{color:"white"}}>Calls</Text>
                    </TouchableOpacity> 
                </View>

                {this.state.selectedTab==1? 
                    <View>
                       <Text>COntenet 1</Text> 
                    </View>
                :
                this.state.selectedTab==2? 
                    <View>
                       <Text>Status </Text> 
                    </View>
                :
               
                    <View>
                       <Text>Kalpana</Text> 
                    </View>

                }
            </View>
        )
    }
}

const TestStyle=StyleSheet.create({
    mainContainer: {
        backgroundColor: "skyblue",
        flex: 1,
    },
    btnTab: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "blue"
    },
    selectedBtnStyle:{
        borderBottomWidth: 3,
        borderColor: "lime",
    },
    textBold:{
        color: "red",
    }
})