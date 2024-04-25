import { View,Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react'

import AuthForm from "./AuthForm";

function AuthContent({isLogin,onAuthenticate}){
    const navigation=useNavigation();

    const [credentialsInvalid,setCredentialsInvalid]=useState({
        username:false,
        email:false,
        password:false,
    })

    function submitHandle(credentials){
        // let {email,password,username}=credentials;
        // email=email.trim();
        // password=password.trim()
        // username=username.trim()

        // const userNameIsInvalid=username.length>0;
        // const emailIsInvalid=email.includes('@');
        // const passwordIsInvalid=password.length > 6;

        // if(!userNameIsInvalid || !emailIsInvalid || !passwordIsInvalid ){
        //     Alert.alert('Vui lòng kiểm tra lại thông tin đăng nhập')
        //     setCredentialsInvalid({
        //         username:!userNameIsInvalid,
        //         email:!emailIsInvalid,
        //         password:!passwordIsInvalid
        //     })
        //     return
        // }
        // onAuthenticate({ email, password })


        navigation.navigate('MenuPage')
    }

    return <View>
        <AuthForm isLogin={isLogin} credentialsInvalid={credentialsInvalid} onSubmit={submitHandle}/>
    </View>
}

export default AuthContent;