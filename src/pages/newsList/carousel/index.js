import React from 'react';
import {
    Text,
} from 'react-native';

class Carousel extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <Text onPress={()=>{navigate('Login');}}>Carousel</Text>
        );
    }
}

export default Carousel;