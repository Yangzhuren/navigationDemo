import React from 'react';
import {
    Text,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

class Test extends React.Component{
    render(){
        const {dispatch} = this.props.navigation;
        return(
            <Text 
                onPress={()=>{
                    const paramsAction = NavigationActions.setParams({
                        params:{user:'axiba'},
                        key:'WorkTask',
                    });
                    dispatch(paramsAction);
                }}
            >test</Text>
        );
    }
}

export default Test;