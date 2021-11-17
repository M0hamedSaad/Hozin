import React from 'react';
import {
  StyleSheet,
  View,
  I18nManager,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, GLOPAL_STYLE, normalize} from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Input = ({
  flag,
  value,
  label,
  secure,
  returnKeyType,
  onSubmitEditing,
  placeholder,
  maxLength,
  onChangeText,
  style,
  setSecure,
  wrapperStyle,
  /////
  icon,
  icon_Name,
  icon_style,
  onPressBTN,
  editable,
  /////////////////////////////////
}) => {
  return (
    <View
      style={[
        {marginBottom: normalize(10)},
        GLOPAL_STYLE.border,
        wrapperStyle,
      ]}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center'}}
        onPress={onPressBTN}>
        {value.length > 0 && label ? (
          <Text
            style={{
              paddingHorizontal: 16,
              fontSize: normalize(16),
              color: COLORS.BLACK + 70,
              marginTop: 5,
            }}>
            {label}
          </Text>
        ) : null}
        <View style={[styles.row_center]}>
          <TextInput
            style={[styles.input, style]}
            maxLength={maxLength}
            secureTextEntry={secure}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            placeholder={placeholder}
            editable={editable}
          />
          {flag && (
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => {
                setSecure(!secure);
              }}>
              {!secure ? (
                <Feather name="eye" size={24} />
              ) : (
                <Feather name="eye-off" size={24} />
              )}
            </TouchableOpacity>
          )}
          {icon && (
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => {
                //  setOnPressIcon();
              }}>
              <Image source={icon_Name} style={icon_style} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  title: {
    fontSize: normalize(24),
    marginTop: hp(13),
    textAlign: 'left',
    color: COLORS.BLACK,
  },
  subTitle: {
    marginTop: hp(1),
    fontSize: normalize(16),
    textAlign: 'left',
    color: '#000000',
  },
  subTitle2: {
    marginTop: hp(1),
    fontSize: normalize(14),
    textAlign: 'left',
    color: '#00000050',
  },
  footer: {
    //  position: 'absolute',
    //  bottom: hp(5),
    marginTop: hp(25),
    width: '100%',
    alignSelf: 'center',
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  row_center: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 16,
  },
  down: {
    marginStart: 8,
  },
  code: {
    fontSize: normalize(18),
    paddingHorizontal: 8,
    color: COLORS.BLACK,
  },

  btn: {
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  deActivebtn: {
    marginTop: hp(2),
    marginBottom: hp(4),
    backgroundColor: COLORS.PRIMARY + 40,
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  inputPhone: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    height: '100%',
    width: '65%',
    fontSize: normalize(16),
  },
  input: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    height: '100%',
    width: wp(75),
    fontSize: normalize(16),
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.BORDER,
    marginStart: 8,
  },
  flagStyle: {
    width: wp(8),
    height: hp(2.5),
  },
  forgetTextStyle: {
    color: COLORS.SECONDARY,
    fontSize: normalize(14),
    textAlign: 'right',
    fontWeight: '600',
  },
  textStyle2: {
    fontSize: normalize(16),
    color: COLORS.BLACK,
  },
  iconStyle: {
    width: wp(6.4),
    height: wp(6.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
