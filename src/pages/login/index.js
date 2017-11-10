import React from 'react';
import {
    View,
    Button,
    Text,
    Image,
    StatusBar,
    TextInput,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';
import {connect} from 'dva-no-router'
import {createAction} from "../../actions/index";
import {BasePage} from '../../components'
import style from './style'
import Actions from './actions'

const loginBackground = require('../../images/login_background.jpeg')
const innerCircle = require('../../images/inner_circle.png')
const camera = require('../../images/camera.png')
const name = require('../../images/message.png')
const password = require('../../images/lock.png')

class Login extends React.Component{
    static navigationOptions = {
        // title:'Login',
        header:null,
    }

    constructor(props){
      super(props)
      new Actions(this)
      this.setState = this.setState.bind(this)
      this.renderLoginButton = this.renderLoginButton.bind(this)
      this.state={
        hidden:false,
        name:'',
        password:'',
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
            backgroundColor='rgba(0,0,0,0)'
            >
            <View style={style.container}>
            <Image source={loginBackground} style={{flex:1}} resizemode='stretch'/>
            {/* your photo */}
            <View style={style.cameraContainer}>
            <Image source={innerCircle} style={style.innerCircle}>
            <Image source={camera} style={style.camera}></Image>
            <Text style={style.photoText}>your photo</Text>
            </Image>
            </View>
            {/* login */}
            <View style={style.loginContainer}>
            {/* name */}
            <View style={style.nameContainer}>
            <Image source={name} style={style.loginIcon}/>
            <Text style={style.nameText}>用户名：</Text>
            <TextInput
            underlineColorAndroid={'transparent'}
            style={style.nameInput}
            maxLength={16}
            keyboardType={'numeric'}
            onChangeText={(name)=>{
                this.state.name = name
            }}
            />
            </View>
            {/* password */}
            <View style={style.passwordContainer}>
            <Image source={password} style={style.loginIcon}/>
            <Text style={style.nameText}>密   码：</Text>
            <TextInput
            underlineColorAndroid={'transparent'}            
            style={style.nameInput}
            secureTextEntry={true}
            maxLength={16}            
            onChangeText={(password)=>{
                this.state.password = password
            }}
            />
            </View>
            {/* login button */}
            {this.renderLoginButton()}
            {this.renderRegister()}
            </View>
            </View>
            </BasePage>
        );
    }

    renderLoginButton(){
        const content=(
        <View style={style.loginbuttonContainer}>
        <Text style={style.loginButton}>Login</Text>
        </View>
        )
        return Platform.select({
            android:<TouchableNativeFeedback onPress={this.login}>{content}</TouchableNativeFeedback>,
            ios:<TouchableOpacity onPress={this.login}>{content}</TouchableOpacity>,
        })
    }

    renderRegister(){
        return(
            <View style={style.registerContainer}>
                <Text style={style.registerText}>免费注册 |</Text>
                <Text style={style.registerText}>忘记密码 ？</Text>       
            </View>
        )
    }
}

function mapStateToProps(state) {
  return {userInfo:state.user.userInfo}
}


module.exports = connect(mapStateToProps)(Login)