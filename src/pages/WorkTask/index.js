import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import {NavigationActions} from 'react-navigation'
import style from './style'

const taskIcon = require('../../images/task.png')
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class WorkTask extends React.Component{
    static navigationOptions={
        tabBarLabel:'Task',
        tabBarIcon:({tintColor})=>(
            <Image style={[style.tabIcon,{tintColor}]} source={taskIcon} resizeMode={'contain'}/>
        )
    }

    constructor(props){
        super(props)
        this.state={
            backData:null,
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        console.log('props',nextProps)
        console.log('state',nextState)
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
            <TextInput style={{width,height:20,textAlign:'right'}}/>
            <Text onPress={()=>{
                navigate('HandleSave',{callBack:(backData)=>{this.setState({backData})}})
            }}>go to handle save</Text>
            <Text>{this.state.backData}</Text>
            </View>
        );
    }
}

export default WorkTask;