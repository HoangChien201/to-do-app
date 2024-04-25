import { View, Text, StyleSheet, TextInput } from 'react-native'

import AuthContent from '../components/Auth/AuthContent';
import SuggestLogin from '../components/SuggestLogin';
function SignUpPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hello! Signup to get started</Text>
            <AuthContent />
            <View style={styles.suggestLogin}>
                <SuggestLogin/>
            </View>
        </View>
    )
}
export default SignUpPage;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 30,
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
        width: 200
    },
    suggestLogin:{
        alignItems:'center'
    }
    
})