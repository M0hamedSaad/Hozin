import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Text } from '../text';
import { COLORS, IMAGES, normalize } from '../../utils';
import FastImage from 'react-native-fast-image'

export const Input = ({
  password,
  label,
  returnKeyType,
  onSubmitEditing,
  placeholder,
  maxLength,
  onChangeText,
  keyboardType
}) => {
  const [secure, setSecure] = useState(password)
  return (
    <View style={styles.container}>
      <Text>{label}</Text>

      <View style={[styles.row_center]}>
        <TextInput
          style={[styles.input]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secure}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />

        {password &&
          <TouchableOpacity
            onPress={() => { setSecure(!secure) }}>

            <FastImage
              resizeMode={'contain'}
              source={secure ? IMAGES.EYE_OFF : IMAGES.EYE_ON}
              style={styles.iconStyle} />

          </TouchableOpacity>
        }
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(35),
    width: '100%',
  },
  row_center: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(20),
    flex: 1,
    backgroundColor: COLORS.WHITE,
    elevation: 1,
    borderRadius: normalize(27.5),
    paddingHorizontal: normalize(20),
    marginBottom: 1

  },
  input: {
    flex: 1,
    height: normalize(55),
    borderRadius: normalize(10),
    color: COLORS.DARK
  },
  iconStyle: {
    width: normalize(22),
    height: normalize(22),
  },
});
