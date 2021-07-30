import React,{useState} from 'react';
import {View,Text, Button, TextInput} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import actionTypes from '../../redux/actions';
import AppStyles from '../../themes/AppStyles';
import styles from './CalculatorStyles';

const CalculatorScreen = () => {
    const dispatch = useDispatch();
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const output = useSelector(state=>state.calculator.output);
    return(
        <View style={AppStyles.screenContainer}>
            <TextInput
            style={styles.textContainer}
            onChangeText={setNumber1}
            placeholder = "Enter first number."
            />
            <TextInput
            style={styles.textContainer}
            onChangeText={setNumber2}
            placeholder = "Enter second number."
            />
            <View style={styles.buttonContainer}>
                <Button style={styles.button}
            title="Addition"
            onPress={() => {
                dispatch({type:actionTypes.addition,payload:{input1:parseInt(number1),input2:parseInt(number2)}})
            }}/>
            </View>
            <View style={styles.buttonContainer}>
             <Button 
            title="Subtract"
            onPress={() => {
                dispatch({type:actionTypes.subtract,payload:{input1:number1,input2:number2}})
            }}/>
            </View>
            <View style={styles.buttonContainer}>
             <Button 
            title="Multiply"
            onPress={() => {
                dispatch({type:actionTypes.multiply,payload:{input1:number1,input2:number2}})
            }}/>
            </View>
            <View style={styles.buttonContainer}>
             <Button 
            title="Division"
            onPress={() => {
                dispatch({type:actionTypes.division,payload:{input1:number1,input2:number2}})
            }}/>
            </View>
            <View style={styles.buttonContainer}>
            <Button 
            title="Modulus"
            onPress={() => {
                dispatch({type:actionTypes.modulus,payload:{input1:number1,input2:number2}})
            }}/>
            </View>
            <Text style={styles.text}>Output: {output}</Text>
        </View>
    );
};

export default CalculatorScreen;