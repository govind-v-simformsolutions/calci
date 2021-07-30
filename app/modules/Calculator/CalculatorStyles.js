import {StyleSheet} from 'react-native';
import AppStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
screenContainer:{
    ...AppStyles.container,
    justifyContent:'center', 
},
text:{
       textAlign:'center',
        fontSize:20,
        margin:20
      
    },
textContainer:{
    borderColor:'#161616',
    borderWidth:2,
    height:40,
    margin:20, 
    borderStyle:'dotted',
},
buttonContainer:{
        marginVertical: 5,
        paddingHorizontal: 120,
        //backgroundColor:'#F54748',
        justifyContent:'center',
        alignItems:'center',
        
},
button:{
    color:'black',
},
});

export default styles;