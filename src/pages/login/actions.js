import {NavigationActions} from 'react-navigation';
import {BaseActions,ApiFetch} from '../../components';

class Actions extends BaseActions{
    login(){
        const validate = this.checkValidate();
        if(validate){
            this.fetchLogin();
        }
    }

    fetchLogin(){
        ApiFetch.fetch('/login','POST',{name:this.state.name,password:this.state.password})
            .then((result)=>{
                console.log('result',result);
                const {navigation} = this.props;
                if(result&&result.id){
                    const resetAction = NavigationActions.reset({
                        index:0,
                        params:{user:result.name},
                        actions:[
                            NavigationActions.navigate({routeName:'Home'})
                        ]
                    });
                    navigation.dispatch(resetAction);
                }
            },(error)=>{
                if(error.message){
                    console.log('error message',error.message);
                    // return;
                }
                console.log('error',error);
            });
    }

    checkValidate(){
        if(!this.state.name){
            return false;
        }else if(!this.state.password){
            return false;
        }
        return true;
    }
}

module.exports = Actions;