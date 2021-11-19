import { StyleSheet } from 'react-native';
import { COLORS, normalize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  space_between: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: normalize(35),
    paddingHorizontal: normalize(25),
    position: 'absolute',
    zIndex: 1
  },
  iconContainer: {
    padding: normalize(15),
    borderRadius: 6,
    backgroundColor: COLORS.DARK + 80
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
  img: {
    width: '100%',
    height: normalize(386),
    borderRadius: normalize(6),
    backgroundColor: COLORS.DARK + 30
  },
  cardDetails: {
    width: normalize(315),
    height: normalize(135),
    backgroundColor: COLORS.WHITE,
    borderRadius: normalize(20),
    //position: 'absolute',
    marginTop: normalize(-67.5),
    alignSelf: 'center',
    padding: normalize(15)
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.DARK + 50,
    zIndex: 0,
  },
  calenderContainer: {
    backgroundColor: '#FAFAFA',
    borderTopLeftRadius: normalize(25),
    borderTopRightRadius: normalize(25),
    marginTop: 'auto',
    padding: normalize(15),
  },
  dash: {
    width: normalize(114),
    height: normalize(6),
    borderRadius: normalize(3),
    alignSelf: 'center',
    backgroundColor: COLORS.GRAY + 20,
    marginBottom: normalize(10),
  },
  btn: {
    marginVertical:normalize(35)
  }
});

export default styles;
