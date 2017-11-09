/**
 * handle navigation demo
 * @author YX
 * @date 2017-11-02
 */
import React from 'react';
import {
  View,
    Button,
    TextInput,
    ActivityIndicator,
} from 'react-native';

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
     return {headerRight};
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

    render(){
      const {setParams} = this.props.navigation
      return(
          <View>
          <TextInput
             placeholder={'Nickname'}
             onChangeText={(nickname)=>{this.state.nickname = nickname;}}
          />
            {/*setParams used in render*/}
          <Button title={'submit'} onPress={()=>{setParams({isSaving:true})}}/>
          </View>
        );
    }
}

export default HandleSave;