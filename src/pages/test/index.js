import React from 'react';
import {
    Text,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

class Test extends React.Component{
    render(){
        const {dispatch,state} = this.props.navigation;
        const homeKey = state.params?state.params.homeKey:'';
        return(
            <Text 
                onPress={()=>{
                    const paramsAction = NavigationActions.back({
                        key:homeKey,
                    });
                    dispatch(paramsAction);
                }}
            >back</Text>
        );
    }
}

export default Test;