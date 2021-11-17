import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, normalize, WIDTH } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  img: {
    width: normalize(326),
    height: normalize(402),
    marginTop: normalize(20)
  },
  content_container: {
    width: '100%',
    paddingHorizontal: normalize(25),
    marginVertical: normalize(66),
  }
});

export default styles;
