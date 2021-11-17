import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, normalize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: normalize(78),
    height: normalize(78)
  },
  upShape: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  downShape: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  shapeSize: {
    width: normalize(246),
    height: normalize(327)
  }
});

export default styles;
