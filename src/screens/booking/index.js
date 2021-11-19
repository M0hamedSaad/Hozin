import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { Button, Text } from '../../components'
import { COLORS, FONTS, IMAGES } from '../../utils'
import { IMAGE_URL } from '../../utils/config'
import Calender from './calender'
import styles from './styles'
import * as Animatable from 'react-native-animatable';
import Status from './status'
const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);
const Booking = ({ navigation, route }) => {
  const { item } = route?.params
  const [selectedStartDate, setselectedStartDate] = useState('null')
  const [selectedEndDate, setSelectedEndDate] = useState('null')
  const [title, setTitle] = useState('booking') // success // failed //booking
  const [loading, setLoading] = useState(false) // success // failed //booking

  const onBack = () => {
    if (title == 'booking') navigation.pop()
    else setTitle('booking')
  }
  const onPress = () => {
    setLoading(true)
    if (title == 'booking') {
      if (selectedStartDate == 'null' || selectedEndDate == 'null')
        setTitle('failed')
      else
        setTitle('success')
    }
    else if (title == 'failed')
      setTitle('booking')
    else {
      navigation.navigate('Home')
    }
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/**header */}
      <View style={styles.space_between}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.iconContainer}>
          <FastImage resizeMode={'contain'} source={IMAGES.LEFT} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <FastImage resizeMode={'contain'} source={IMAGES.SAVE} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <FastImage
        style={styles.img}
        source={{ uri: item?.photos ? IMAGE_URL + item?.photos[0]?.photo_reference : '_' }} />

      <View style={styles.cardDetails}>
        <Text
          size={20}
          type={FONTS.BOLD}>
          {item?.name}
        </Text>
        <Text color={COLORS.DARK + 80}>
          {item?.vicinity}
        </Text>
      </View>

      <Modal
        visible={true}
        animationType='fade'
        transparent
        onRequestClose={onBack}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPressOut={onBack}
            style={styles.backDrop} />

          <View style={styles.calenderContainer}>
            <View style={styles.dash} />


            <AnimatableView
              key={title}
              animation={title == 'booking' ? 'fadeInLeft' : 'zoomIn'}>
              {title == 'booking' ?
                <Calender
                  selectedStartDate={selectedStartDate}
                  setselectedStartDate={setselectedStartDate}
                  selectedEndDate={selectedEndDate}
                  setSelectedEndDate={setSelectedEndDate} />
                :
                <Status status={title} />
              }
            </AnimatableView>


            <Button
              onPress={onPress}
              loading={loading}
              style={styles.btn}
              title={title == 'booking' ? 'Continue'
                : title == 'success' ? 'Back To Home'
                  : 'Try Again'
              }
            />
          </View>

        </View>
      </Modal>
    </SafeAreaView>
  )
}
export default Booking
