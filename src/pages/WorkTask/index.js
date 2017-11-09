import React from 'react';
import {
    Text,
} from 'react-native';

class WorkTask extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <Text onPress={()=>{navigate('HandleSave');}}>Work Task</Text>
        );
    }
}

export default WorkTask;