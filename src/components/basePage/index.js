import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    ActivityIndicator,
    Platform,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const runningPage = (
    <View style={{width,height,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator/> 
    </View>
);

const failPage = (
    <TouchableOpacity style={{width,height,alignItems:'center',justifyContent:'center'}}>
        <Text>shit!</Text>
    </TouchableOpacity>
);

class BasePage extends React.Component{
    render(){
        let children = this.props.children;
        if(this.props.pageLoading === 'running'){
            children=runningPage;
        }else if(this.props.pageLoading === 'fail'){
            children = failPage;
        }
        return(
            <View style={{width,height}}>
                <StatusBar animated={true} {...this.props}/>
                <View 
                    style={{
                        flex:1,
                        top:Platform.select({
                            android:0,
                            ios:this.props.translucent?0:20,
                        })}}>
                    {children}
                </View>
            </View>
        );
    }
}

module.exports = BasePage;