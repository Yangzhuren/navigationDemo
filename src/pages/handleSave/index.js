/**
 * handle navigation demo
 * @author YX
 * @date 2017-11-02
 */
import React from 'react';
import {
  Text,
  View,
    Button,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import {NavigationActions} from 'react-navigation'

class HandleSave extends React.Component{
  // define navigation options
    static navigationOptions = ({navigation})=>{
     const {params={}} = navigation.state;
     let headerRight = (
         <Button
          title={'Save'}
         onPress={params.handleSave?params.handleSave:()=>null}
          ></Button>
      );
     if(params.isSaving){
       headerRight = <ActivityIndicator style={{marginRight:10}}/>;
      }
     return {title:'Handle',headerRight};
    }

    constructor(props){
        super(props);
        this.state={
            nickname:'Lucy jacuzzi',
        };
    }

    // setParams
    _handleSave = ()=>{
      this.props.navigation.setParams({isSaving:true});
      setTimeout(()=>{
        this.props.navigation.setParams({isSaving:false});
      },2000)
    }

    // setParams must be used after component mounted
    componentDidMount() {
      this.props.navigation.setParams({handleSave:this._handleSave.bind(this)})
   }

   componentWillReceiveProps(nextProps,nextState){
    console.log('props',nextProps)
    console.log('state',nextState)
}

    render(){
      const {setParams,dispatch,goBack,state,navigate} = this.props.navigation
      const {params } = state
      return(
          <View>
          <TextInput
             placeholder={'Nickname'}
             onChangeText={(nickname)=>{this.state.nickname = nickname;}}
          />
            {/*setParams used in render*/}
          <Button title={'submit'} onPress={()=>{setParams({isSaving:true})}}/>
          <Button title={'go back'} onPress={()=>{
            params.callBack('back data')
            goBack()
          }}/>
          <Button title={'replace test'} onPress={()=>{
            const navigateAction = NavigationActions.reset({
              index:0,
              actions:[NavigationAction.navigate('Test')],
              key:'HandleSave',
            })
            dispatch(navigateAction)
          }}/>
          </View>
        );
    }
}

export default HandleSave;