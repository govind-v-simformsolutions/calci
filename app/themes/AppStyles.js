import {Dimensions} from 'react-native'

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const AppStyles = {
    appContainer:{
        flex:1,
        height:screenHeight,
        width:screenWidth,
        backgroundColor: '#F5E6CA',
    },
    container:{
        flex:1,
    }, 

};

export default AppStyles;