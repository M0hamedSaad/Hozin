import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Text } from '../text';
import { COLORS, FONTS, normalize } from '../../utils';
export const Button = ({
  title,
  onPress,
  loading,
  style,
  disabled,
  textStyle,
  width,
  center
}) => {
  return (
    <TouchableOpacity
      disabled={disabled ? true : loading ? true : false}
      style={[styles.buttonContainer, style, { width }, { alignSelf: center ? 'center' : 'auto' }]}
      onPress={onPress}>
      {loading == true ?
        <ActivityIndicator color={'#fff'} size="small" />
        :
        <Text
          center
          color={COLORS.WHITE}
          type={FONTS.BOLD}
          size={normalize(18)}
          style={[textStyle]}>{title}</Text>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(28.5),
    height: normalize(57),
    width: '100%'

  },


});
