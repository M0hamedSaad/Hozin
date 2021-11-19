import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { Button, Input, Text } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { login_validation, showToast } from '../../utils'
import _ from "lodash";
import { login } from '../../redux/actions'

export const SignIn = ({ navigation }) => {
    const users = useSelector(state => state.registerUserState.users);
    const userData = useSelector(state => state.userState.user);
    const dispatch = useDispatch()
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    const _login = () => {
        const isValidation = login_validation(email, password)
        if (isValidation) {
            const indexOfemail = _.findIndex(users, { email });
            const indexOfusername = _.findIndex(users, { username: email });

            if (indexOfemail != -1) {
                if (password == users[indexOfemail].password) {
                    dispatch(login(users[indexOfemail]))
                    return;
                }
                else {
                    showToast('Error', 'error', true, 'Invalid e-mail or password.')
                    return;
                }
            }
            else if (indexOfusername != -1) {
                if (password == users[indexOfusername].password) {
                    dispatch(login(users[indexOfusername]))
                    return;
                }
                else {
                    showToast('Error', 'error', true, 'Invalid e-mail or password.')
                    return;
                }
            }
            else showToast('Error', 'error', true, 'Invalid e-mail or password.')

        }
    }
    useEffect(() => {
        if (userData) navigation.replace('HomeStack')
    }, [userData])
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
                onSubmitEditing={_login} />

            <Text style={styles.forget}>
                {'Forgot Password?'}
            </Text>

            <Button
                title={'Login'}
                onPress={_login}
            />
        </View>
    )
}
export default SignIn