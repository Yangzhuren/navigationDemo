import React from 'react';
import {
    View,
    Button,
    Text,
    Image,
    StatusBar,
} from 'react-native';
import {connect} from 'dva-no-router'
import {createAction} from "../../actions/index";
import {BasePage} from '../../components'
import style from './style'

const loginBackground = require('../../images/login_background.jpeg')

class Login extends React.Component{
    static navigationOptions = {
        // title:'Login',
        header:null,
    }

    constructor(props){
      super(props)
      this.setState = this.setState.bind(this)
      this.state={
        hidden:false,
      }
    }

    render(){
      const {navigate} = this.props.navigation
        return(
            <BasePage
            pageLoading=''
            hidden={false}
            translucent={true}
            barStyle='light-content'
            >
            <View style={{flex:1}}>
            <Image source={loginBackground} style={{flex:1}} resizemode='stretch'/>
            </View>
            </BasePage>
        );
    }
}

// function select(store) {
//   return {
//     isLoggedIn:store.user.isLoggedIn,
//     user:store.user.user,
//     status:store.user.status,
//   }
// }

function mapStateToProps(state) {
  return {user:state.user.user}
}


module.exports = connect(mapStateToProps)(Login)