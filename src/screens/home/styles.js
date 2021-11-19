import { StyleSheet } from 'react-native';
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
  },

  flatlistContainer: {
    marginTop: normalize(45),
    marginBottom: normalize(30),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  endCard: {
    marginEnd: normalize(25)
  },
  img: {
    height: '100%',
    width: normalize(256),
    borderRadius: normalize(25),
    backgroundColor: COLORS.GRAY,
    overflow: 'hidden'
  },
  rateContainer: {
    width: normalize(74),
    height: normalize(36),
    borderRadius: normalize(20.5),
    backgroundColor: COLORS.DARK + 60,
    position: 'absolute',
    right: normalize(20),
    top: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  },
  titleContainer: {
    position: 'absolute',
    bottom: normalize(17),
    right: normalize(25),
    left: normalize(25),
    backgroundColor: COLORS.DARK + 80,
    borderRadius: 8,
    padding: 5
  },
  sad: {
    width: normalize(200),
    height: normalize(200),
    alignSelf: 'center'
  },
  centerLoader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:25
  }
});

export default styles;
