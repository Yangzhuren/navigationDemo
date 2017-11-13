import React from 'react';
import {
    Image,
    View,
    WebView,
} from 'react-native';
import {BasePage} from '../../components';
import style from './style'
// import Carousel from './carousel';
// import List from './list';

const homeIcon = require('../../images/home.png')

class NewsList extends React.Component{
    static navigationOptions={
        tabBarLabel:'Home',
        tabBarIcon:({tintColor})=>(
            <Image style={[style.tabIcon,{tintColor}]} source={homeIcon} resizeMode={'contain'}/>
        )
    }

    render(){
        return(
            <BasePage>
                <WebView style={{flex:1}} source={{uri:'https://www.baidu.com'}}/>
            </BasePage>
        );
    }
    
    // 子组件navigation的传递
    // render(){
    //     return(
    //         <View style={{justifyContent:'space-around',flex:1}}>
    //             {/*navigation 需传递给子组件，子组件才能使用路由*/}
    //             <Carousel navigation={this.props.navigation}></Carousel>
    //             <List/>
    //         </View>
    //     );
    // }
}

export default NewsList;