import React from 'react';
import {
    View,
} from 'react-native';
import Carousel from './carousel';
import List from './list';


class NewsList extends React.Component{
    
    render(){
        return(
            <View style={{justifyContent:'space-around',flex:1}}>
                {/*navigation 需传递给子组件，子组件才能使用路由*/}
                <Carousel navigation={this.props.navigation}></Carousel>
                <List/>
            </View>
        );
    }
}

export default NewsList;