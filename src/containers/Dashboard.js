import React,{Component} from 'react';
import {View, FlatList, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Gallery from 'react-native-image-gallery';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state={
            allData :[
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                  },
                  {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                  },
                  {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                  },
            ],
        }
    }
    render(){
        return(
            <View style={[TestStyle.mainContainer]}>
                <View style={[TestStyle.sliderContainer]}>                    
                    <Gallery
                        style={{ flex: 1, backgroundColor: 'black' ,borderWidth:1}}
                        images={[
                        
                        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                        { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                        { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                        { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                        ]}
                    />
                </View>
                <View style={[TestStyle.bodyContainer]}>
                    <FlatList
                        data={this.state.allData}
                        renderItem={({item})=> {
                            return(
                                <View style={[TestStyle.dataContainer]}>
                                    <Icon  name="plus" color='white' size={20} />
                                    <Text style={{marginHorizontal: 50, color:"white"}}>{item.title}</Text>
                                    <Icon  name="arrow-right" color='white' size={20} />
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
}

const TestStyle= StyleSheet.create({
  mainContainer: {
    padding : 20,
    backgroundColor: "peachpuff",
    flex: 1,
  },
  bodyContainer: {
    
  },
  sliderContainer: {
    height: 250,
    marginVertical: 20,
    marginVertical: 10,
  },
  dataContainer: {
    backgroundColor: "brown",
    //marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 50,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  }
})