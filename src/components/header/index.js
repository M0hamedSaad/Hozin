import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES, normalize} from '../../utils';
import {useNavigation} from '@react-navigation/core';
export const Header = ({title, isblack, style}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={isblack ? IMAGES.LEFT2 : IMAGES.LEFT}
          style={[styles.backIcon, styles.reverseImg]}
        />
      </TouchableOpacity>

      <Text style={[styles.title, {color: isblack ? '#000' : '#fff'}]}>
        {title}
      </Text>
      <Text style={{width: wp(7)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: wp(100),
    flexDirection: 'row',
    marginTop: hp(3),
    //  backgroundColor: 'red',
  },
  backIcon: {
    width: wp(7),
    height: wp(7),
  },
  reverseImg: {
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  title: {
    textAlign: 'center',
    fontSize: normalize(18),
    fontWeight: '600',
    marginStart: normalize(16),
  },
});
