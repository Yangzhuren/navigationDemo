
import React from 'react';
import {
    View,
    Button,
    StatusBar,
} from 'react-native';
import{
    StackNavigator,
} from 'react-navigation';
import dva from 'dva-no-router';
import {registerModels} from './models';
import Login from './pages/login';
import Home from './pages/home';
import HandleSave from './pages/handleSave';
import Test from './pages/test';

const Root = StackNavigator({
    Login:{screen:Login},
    Home:{screen:Home,navigationOptions:({navigation})=>({
        title:'Home'
    })},
    HandleSave:{screen:HandleSave},
    Test:{screen:Test},
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