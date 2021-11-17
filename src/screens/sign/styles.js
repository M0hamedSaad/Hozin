import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, normalize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  logo: {
    marginVertical: normalize(40),
    width: normalize(60),
    height: normalize(60),
    alignSelf: 'center'
  },
  forget: {
    fontSize: normalize(14),
    marginVertical: normalize(30),
    alignSelf: 'flex-end',
    color:COLORS.DARK+80
  }
});

export default styles;
