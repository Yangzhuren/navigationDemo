import React from 'react';
import {Text } from 'react-native';
import { TabNavigator} from 'react-navigation';
import NewsList from '../newsList';
import WorkTask from '../WorkTask';
import HandleSave from '../handleSave';
import Test from '../test';

// class Home extends React.Component{
//     constructor(props){
//       super(props)
//       this.state={
//         title:'',
//       }
//     }
//
//     static navigationOptions={
//         title:'Home',
//     }
//
//     render(){
//         return TabNavigator({
//           NewsList:{screen:NewsList},
//           WorkTask:{screen:WorkTask}
//         })
//     }
// }

const Home = TabNavigator({
    NewsList:{screen:NewsList},
    WorkTask:{screen:WorkTask},
    Test:{screen:Test},
},{
    tabBarPosition:'bottom',
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor:'blue',
        inactiveTintColor:'grey',
    },
});

export default Home;