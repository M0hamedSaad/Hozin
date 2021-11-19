import React from 'react'
import { View, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Text } from '../../components'
import { COLORS, IMAGES, normalize } from '../../utils'

export const Status = ({ status }) => {
    return (
        <View>
            <FastImage
                style={styles.icon}
                source={status == 'failed' ? IMAGES.FAILED : IMAGES.SUCCESS} />
            <Text size={normalize(24)} >
                {'Transaction ' + status + '\n'}
            </Text>

            <Text color={COLORS.DARK + 80}>
                {status == 'failed' ?
                    'Please check your internet connection and try again in a moments. Good luck!'
                    : 'Congratulations! You can see your bookings in the booking section. Enjoy your trip!'}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        marginVertical: normalize(25),
        width: normalize(78),
        height: normalize(78),
    }
})
export default Status
