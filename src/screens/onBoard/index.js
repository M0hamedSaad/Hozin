import React, { useEffect } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { COLORS, FONTS, IMAGES, normalize, showToast } from '../../utils';
import { skipOnBoard } from '../../redux/actions';
import { Button, Text } from '../../components';
import FastImage from 'react-native-fast-image';


const OnBoard = ({ navigation }) => {
  const dispatch = useDispatch()
  // dispatch(skipOnBoard())
  const test = () => {
  showToast('sssss')
}
  return (
    <SafeAreaView style={styles.container}>
      <FastImage source={IMAGES.ONBOARD} style={styles.img} />
      <View style={styles.content_container}>
        <Text
          style={{ marginBottom: normalize(20) }}
          size={normalize(24)}
          type={FONTS.BOLD}
        >{'Travel with no worry'}
        </Text>

        <Text
          color={COLORS.DARK + 80}
          style={{ lineHeight: normalize(28) }}>
          {'You can now experience the next level travel experience for hotel bookings.'}
        </Text>
      </View>
      <Button
        onPress={test}
        title={'Next'}
        center
        width={normalize(165)}
      />
    </SafeAreaView>
  );
};
export default OnBoard;
