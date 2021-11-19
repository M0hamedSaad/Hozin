import { TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { Text } from "../../components"
import styles from './styles'
import { IMAGE_URL } from '../../utils/config'
import React from "react"
import { COLORS, FONTS, IMAGES, normalize } from "../../utils"

export const Item = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { item })}
            activeOpacity={.75}
            style={styles.endCard}>

            <FastImage
                source={{ uri: item?.photos ? IMAGE_URL + item?.photos[0]?.photo_reference : '_' }}
                resizeMode='cover'
                style={styles.img} >
                <View style={styles.rateContainer}>
                    <FastImage
                        source={IMAGES.STAR}
                        style={styles.icon} />
                    <Text color='#fff'>{item?.rating}</Text>
                </View>

                <View style={styles.titleContainer}>
                    <Text
                        type={FONTS.BOLD}
                        size={normalize(20)}
                        color={'#fff'}>
                        {item?.name}
                    </Text>
                    <Text
                        style={{ marginTop: 7 }}
                        size={normalize(14)}
                        color={COLORS.WHITE + 80}>
                        {item?.vicinity}
                    </Text>
                </View>

            </FastImage>
        </TouchableOpacity>
    )
}

const equal = (prev, next) => {
    return prev.item.place_id === next.item.place_id
}

export default React.memo(Item, equal)