import React from 'react';
import { TabNavigator} from 'react-navigation';
import NewsList from '../newsList';
import WorkTask from '../WorkTask';
import HandleSave from '../handleSave';

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
});

export default Home;