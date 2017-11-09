
import React from 'react';
import {
    Button,
} from 'react-native';
import{
    StackNavigator,
} from 'react-navigation';
import dva from 'dva-no-router';
import {registerModels} from './models';
import Login from './pages/login';
import Home from './pages/home';
import HandleSave from './pages/handleSave';

const Root = StackNavigator({
    Login:{screen:Login},
    Home:{screen:Home,navigationOptions:({navigation})=>{
        // setParams动态修改导航栏属性
        const {state,setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
        // 路由传参，下一路由使用该参数
            title:isInfo?`${user}'s chat history`:`Chat with ${user}`,
            // 右上角菜单
            headerRight:<Button title={isInfo?'Done':`${user}'s info`} onPress={()=>{setParams({mode:isInfo?'none':'info'});}}/>
        };
    }},
    HandleSave:{screen:HandleSave},
},{
    initialRouteName:'Login',
    mode:'card',
    headMode:'float',
});

const app = dva();

registerModels(app);

app.router(()=><Root/>);

const App = app.start();

export default App;