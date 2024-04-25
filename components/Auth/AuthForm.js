import { View, StyleSheet } from 'react-native'
import { useState } from 'react'

import Input from './Input'
import ButtonCustom from '../ButtonCustom';
import { Color } from '../../constant/Color';
function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')

    const {
        username:userNameIsInvalid,
        email: emailIsInvalid,
        password: passwordIsInvalid,
    } = credentialsInvalid;

    function updateValueHandle(typeValue, enteredValue) {
        switch (typeValue) {
            case 'username':
                setEnteredUserName(enteredValue)
                break;
            case 'email':
                setEnteredEmail(enteredValue)
                break;
            case 'password':
                setEnteredPassword(enteredValue)
                break;

        }
    }

    function submitHandle() {
        onSubmit({
            username: enteredUserName,
            email: enteredEmail,
            password: enteredPassword
        })
    }

    return (
        <View style={styles.formContainer}>
            {
                !isLogin ? <Input 
                placeholder='Your name'  
                onUpdateValue={updateValueHandle.bind(this,'username')} 
                value={enteredUserName} 
                isInvalid={userNameIsInvalid}/> : ''
            }
            <Input 
                placeholder='Email' 
                onUpdateValue={updateValueHandle.bind(this,'email')} 
                value={enteredEmail} 
                isInvalid={emailIsInvalid}/>
            <Input 
                placeholder='Password' 
                secure={true}  
                onUpdateValue={updateValueHandle.bind(this,'password')} 
                value={enteredPassword} 
                isInvalid={passwordIsInvalid}/>
            <View style={styles.containerButton}>
                <ButtonCustom
                    children={isLogin ? 'Login' : 'Get Started'}
                    backgroundColor={Color.primary200}
                    color='#fff'
                    onPress={submitHandle}
                />
            </View>
        </View>
    )
}
export default AuthForm;

const styles = StyleSheet.create({
    formContainer: {
        marginVertical: 30
    },
    containerButton:{
        marginTop:20,
        marginBottom:15,
        width:'100%',
        height:60,
    },
})