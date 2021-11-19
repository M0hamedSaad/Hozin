import React, { useEffect, useState } from 'react'
import _ from "lodash";
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from '../../components'
import { login, registerNewUser } from '../../redux/actions'
import { normalize, register_validation, showToast } from '../../utils'

export const SignUp = ({ navigation }) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.registerUserState.users);
    const userData = useSelector(state => state.userState.user);
    const [loading, setLoadig] = useState(false)
    const [username, onChangeUsername] = useState('')
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    const register = () => {
        setLoadig(true)
        let user = { username, email, password }
        const isValidation = register_validation(user)
        if (isValidation) {
            const indexOfemail = _.findIndex(users, { email });
            const indexOfusername = _.findIndex(users, { username });
            const isNewUser = indexOfusername == -1 && indexOfemail == -1;
            if (isNewUser) {
                user.id = users.length + 1
                dispatch(registerNewUser(user))
                dispatch(login(user))
                setLoadig(false)
                showToast(user?.username + ' ,has been created successfully.', 'success')
            }
            else {
                setLoadig(false)
                showToast('User already exist')
            }
        }
        else setLoadig(false)
    }

    useEffect(() => {
        if (userData) navigation.replace('HomeStack')
    }, [userData])

    return (
        <View>
            <Input
                label={'Username'}
                placeholder={'Create your username'}
                onChangeText={onChangeUsername} />

            <Input
                keyboardType='email-address'
                label={'E-mail'}
                placeholder={'Enter your e-mail'}
                onChangeText={onChangeEmail} />

            <Input
                returnKeyType='go'
                password
                label={'Password'}
                placeholder={'Create your password'}
                onChangeText={onChangePassword}
                onSubmitEditing={register} />

            <Button
                loading={loading}
                title={'Sign Up'}
                onPress={register}
                style={{ marginTop: normalize(40) }} />
        </View>
    )
}

export default SignUp;