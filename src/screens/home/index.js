import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../../components'
import { getHotels } from '../../redux/actions'
import { COLORS, FONTS, IMAGES, normalize } from '../../utils'
import styles from './styles'
import { IMAGE_URL } from '../../utils/config'
import LottieView from 'lottie-react-native';

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userState.user);//user data
  const hotels = useSelector(state => state.hotelsState.hotels); // all hotels
  const nextPage = useSelector(state => state.hotelsState.nextPage);
  const loading = useSelector(state => state.hotelsState.loading);
  const category = ['Recommend', 'Popular', 'Trending']
  const [selctedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    dispatch(getHotels())
  }, [])

  useEffect(() => {
    console.log({ nextPage });
  }, [nextPage])

  const onEndReached = () => {
    nextPage ? dispatch(getHotels(nextPage)) : null
  }
  const renderItem = useCallback(
    ({ item, index }) => {
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
    },[])

  return (
    <SafeAreaView style={styles.container}>
      {/**got to profile */}
      <TouchableOpacity style={styles.iconContainer}>
        <FastImage
          source={IMAGES.AWARD}
          style={styles.icon}
          resizeMode='contain' />
      </TouchableOpacity>

      {/**body */}
      <View style={styles.contentContainer}>
        {/**title */}
        <Text
          style={{ marginVertical: normalize(40) }}
          size={normalize(28)}
          type={FONTS.BOLD}>
          {`Good Morning,\n${userData.username}!`}
        </Text>

        {/**tabs .. */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {category.map((item, index) => {
              return (
                <View key={index.toString()}>
                  <TouchableOpacity
                    onPress={() => { setSelectedIndex(index) }}
                    style={styles.tab}>
                    <Text
                      style={selctedIndex == index ?
                        styles.active
                        : styles.deActive}>
                      {item}
                    </Text>
                    {selctedIndex == index && <View style={styles.dot} />}
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
        </View>

        {/**images */}
        <View style={styles.flatlistContainer}>
          {loading && !nextPage ? //loader
            <ActivityIndicator
              color={COLORS.DARK} />
            :
            hotels?.length == 0 ? //is empty
              <View>
                <View style={styles.sad} >
                  <LottieView
                    source={require('../../assets/images/sad.json')}
                    autoPlay
                    loop={false} />
                </View>
                <Text>
                  {'Sorry ,not found hotels near your location'}
                </Text>
              </View>
              :
              <FlatList
                initialNumToRender={2}
                onEndReached={onEndReached}
                extraData={hotels}
                keyExtractor={(item, index) => {
                  return index.toString()
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={hotels}
                renderItem={renderItem}
              />
          }
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Home
