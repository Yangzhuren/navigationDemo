import {StyleSheet,Dimensions,PixelRatio} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container:{
        flex:1,
    },

    cameraContainer:{
        position:'absolute',
        top:64,
        alignSelf:'center',
        width:120,
        height:120,
        alignItems:'center',
        justifyContent:'center',
    },

    innerCircle:{
        width:120,
        height:120,
        alignItems:'center',
        justifyContent:'center',
    },

    camera:{
        width:32,
        height:32,
    },

    photoText:{
        backgroundColor:'rgba(0,0,0,0)',
        color:'white',
        marginTop:6,
        fontSize:10,
    },

    loginContainer:{
        position:'absolute',
        top:250,
        width:width*0.8,
        alignSelf:'center',
    },

    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2/PixelRatio.get(),
        borderBottomColor:'white',
        paddingBottom:4,
    },

    loginIcon:{
        width:20,
        height:20,
        marginLeft:5,
    },

    nameText:{
        color:'white',
        fontSize:12,
        backgroundColor:'rgba(0,0,0,0)',
        marginLeft:10        
    },

    nameInput:{
        flex:1,
        marginLeft:20,
        color:'white',
    },

    passwordContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2/PixelRatio.get(),
        borderBottomColor:'white',
        paddingBottom:4,
        marginTop:20,
    },

    loginbuttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.4)',
        padding:20,
        paddingTop:10,
        paddingBottom:10,
        marginTop:60,
        borderRadius:8,
    },

    loginButton:{
        color:'white',
        fontSize:18,
    },

    registerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:10,
    },

    registerText:{
        backgroundColor:'rgba(0,0,0,0)',
        color:'white',
        fontSize:12,
        marginLeft:10
    },
});

module.exports = style;