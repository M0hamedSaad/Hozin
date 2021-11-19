import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Button, Text } from '../../components'
import { COLORS, FONTS, IMAGES, normalize } from '../../utils'
import { IMAGE_URL } from '../../utils/config'
import styles from './styles'
const Details = ({ navigation, route }) => {
  const { item } = route?.params
  return (
    <SafeAreaView style={styles.container}>
      {/**header */}
      <View style={styles.simpleRow}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <FastImage
            resizeMode={'contain'}
            source={IMAGES.BACK}
            style={styles.icon} />
        </TouchableOpacity>
        <Text type={FONTS.BOLD} size={normalize(20)}>
          {'    ' + 'Description'}
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <FastImage
          style={styles.img}
          source={{ uri: item?.photos ? IMAGE_URL + item?.photos[0]?.photo_reference : '_' }} />

        <View style={styles.columnContainer}>
          <Text type={FONTS.BOLD} size={normalize(20)} numberOfLines={1}>
            {item?.name}
          </Text>
          <Text numberOfLines={2} size={normalize(14)}>
            {item?.vicinity}
          </Text>
          <View style={styles.simpleRow}>
            <FastImage source={IMAGES.STAR} style={styles.icon} />
            <Text color={COLORS.YELLOW}>{item?.rating}</Text>
            <Text color={COLORS.DARK + 80} style={{ marginStart: normalize(10) }}>
              ({item?.user_ratings_total} Reviews)
            </Text>
          </View>
        </View>
      </View>

      <Text color={COLORS.DARK + 80}>
        {'You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.'}
      </Text>

      <Button
        onPress={() => { navigation.navigate('Booking', { item }) }}
        width={normalize(165)}
        style={styles.btn}
        title={'Book'} />
    </SafeAreaView>
  )
}
export default Details
