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
  iconContainer: {
    marginTop: normalize(35),
    marginLeft: normalize(324)
  },
  icon: {
    width: normalize(24),
    height: normalize(24)
  },
  contentContainer: {
    paddingStart: normalize(25),
    flex: 1
  },
  active: {
    fontSize: normalize(18),
    fontWeight: '700',

  },
  deActive: {
    color: COLORS.DARK + 80,
    fontSize: normalize(18),
    fontWeight: '400',

  },
  tab: {
    marginEnd: normalize(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY,
    marginTop: normalize(7),
    alignSelf: 'center'
  }
});

export default styles;
