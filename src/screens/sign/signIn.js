import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { Button, Input, Text } from '../../components'

export const SignIn = () => {
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    const login = () => {
        alert(JSON.stringify({ email, password }))
    }
    return (
        <View>
            <Input
                keyboardType='email-address'
                label={'Username or E-mail'}
                placeholder={'Enter your e-mail'}
                onChangeText={onChangeEmail} />

            <Input
                returnKeyType='go'
                password
                label={'Password'}
                placeholder={'Enter your password'}
                onChangeText={onChangePassword}
                onSubmitEditing={login} />

            <Text style={styles.forget}>
                {'Forgot Password?'}
            </Text>

            <Button
                title={'Login'}
                onPress={login}
            />
        </View>
    )
}

export default SignIn
