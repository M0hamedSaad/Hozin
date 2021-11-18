import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../../components'
import { logoutuser } from '../../redux/actions'
import { FONTS, IMAGES, normalize } from '../../utils'
import styles from './styles'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userState.user);
  const category = ['Recommend', 'Popular', 'Trending']
  const [selctedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    // dispatch(logoutuser())
  }, [])
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.iconContainer}>
        <FastImage
          source={IMAGES.AWARD}
          style={styles.icon}
          resizeMode='contain' />
      </TouchableOpacity>

      <View style={styles.contentContainer}>

        <Text
          style={{ marginVertical: normalize(40) }}
          size={normalize(28)}
          type={FONTS.BOLD}>
          {`Good Morning,\n${userData.username}!`}
        </Text>

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

        <View style={{ marginVertical: normalize(45), flex: 1 }}>
          <SwiperFlatList
            keyExtractor={(item, index) => { index.toString() }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({ item }) => (
              <ImageBackground source={IMAGES.HOTEL} style={{height:'100%',width:normalize(256)}} >
              </ImageBackground>
            )}
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Home
