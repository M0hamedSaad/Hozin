import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../../components'
import { logoutuser } from '../../redux/actions'
import { COLORS, FONTS, IMAGES, normalize } from '../../utils'
import styles from './styles'
const Profile = ({ navigation }) => {
  const userData = useSelector(state => state.userState.user);//user data
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logoutuser());
    navigation.replace('Splash')
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.profilePicture}>
        <FastImage style={styles.img} source={IMAGES.USER} />
        <TouchableOpacity style={styles.cameraContainer}>
          <FastImage style={styles.icon} source={IMAGES.CAMERA} />
        </TouchableOpacity>
      </View>

      <Text size={normalize(24)} center type={FONTS.BOLD} >
        {userData?.username}
      </Text>
      <Text center color={COLORS.DARK + 80} >
        {userData?.email}
      </Text>

      <View style={styles.cardDetails}>
        <View style={styles.columnCenter}>
          <Text type={FONTS.BOLD} color={COLORS.PRIMARY} size={normalize(28)} >
            {'47'}
          </Text>
          <Text color={COLORS.DARK + 80} size={normalize(14)} >
            {'Reviews'}
          </Text>
        </View>

        <View style={styles.columnCenter}>
          <Text type={FONTS.BOLD} color={COLORS.PRIMARY} size={normalize(28)} >
            {'75'}
          </Text>
          <Text color={COLORS.DARK + 80} size={normalize(14)} >
            {'Transactions'}
          </Text>
        </View>

        <View style={styles.columnCenter}>
          <Text type={FONTS.BOLD} color={COLORS.PRIMARY} size={normalize(28)} >
            {'2'}
          </Text>
          <Text color={COLORS.DARK + 80} size={normalize(14)} >
            {'Bookings'}
          </Text>
        </View>
      </View>

      <View style={styles.optionContainer}>
        <Text color={COLORS.DARK} type={FONTS.BOLD} size={20} >
          {'Options'}
        </Text>

        <TouchableOpacity
          activeOpacity={.75}
          style={styles.simpleRow}>
          <FastImage
            source={IMAGES.AWARD}
            style={styles.icon}
          />
          <Text>
            {'   User Settings'}
          </Text>

          <FastImage
            source={IMAGES.RIGHT}
            style={[styles.icon, { marginStart: 'auto' }]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={logOut}
          activeOpacity={.75}
          style={styles.simpleRow}>
          <FastImage
            source={IMAGES.LOG_OUT}
            style={styles.icon}
          />
          <Text>
            {'   Log out'}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          activeOpacity={.75}
          style={styles.simpleRow}>
          <FastImage
            source={IMAGES.SUCCESS}
            style={styles.icon}
          />
          <Text>
            {'   Bookings'}
          </Text>

          <FastImage
            source={IMAGES.RIGHT}
            style={[styles.icon, { marginStart: 'auto' }]}
          />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}
export default Profile
