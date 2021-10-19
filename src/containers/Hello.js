import React,{Component} from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class hello extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
            <View style={[TestStyle.mainContainer]}>
                <Text>Hey how are you...</Text>
                <View style={[TestStyle.oval]}>
                    <Text style={[TestStyle]}>ohhh</Text>
                </View>
            </View>
            </>
        )   
    }
}

const TestStyle= StyleSheet.create({

mainContainer: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
},

oval: {
    backgroundColor: "skyblue",
    borderRadius: 50,
    border:1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
}
})
