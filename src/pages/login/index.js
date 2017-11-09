import React from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';
import {connect} from 'dva-no-router'
import {createAction} from "../../actions/index";


class Login extends React.Component{
    static navigationOptions = {
        title:'Login',
    }

    constructor(props){
      super(props)
    }

    render(){
      const {navigate} = this.props.navigation
      const {isLoggedIn,user,status,payload} = this.props.user
      const {dispatch} = this.props
        return(
            <View>
                <Button onPress={()=>{
                  // navigate('Home',{user:'lucy'})
                  const action = createAction('user/userChanged')({isLoggedIn:'true',user:'lili',status:1,payload:'test'})
                  dispatch(action)
                }} title={'Login'}></Button>
              <Text>login:{isLoggedIn}---user:{JSON.stringify(user)}---status:{status}---payload:{payload}</Text>
            </View>
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