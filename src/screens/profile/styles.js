import { StyleSheet } from 'react-native';
import { COLORS, normalize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  icon: {
    width: normalize(24),
    height: normalize(24)
  },
  profilePicture: {
    marginTop: normalize(95),
    marginBottom: normalize(15),
    width: normalize(90),
    alignSelf: 'center'
  },
  img: {
    width: normalize(90),
    height: normalize(90),
    borderRadius: normalize(90),
    backgroundColor: COLORS.DARK + 30
  },
  cameraContainer: {
    width: normalize(38),
    height: normalize(38),
    borderRadius: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  cardDetails: {
    width: normalize(325),
    height: normalize(103),
    borderRadius: normalize(10),
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    elevation: 1,
    marginVertical: normalize(35),
    flexDirection: 'row'
  },
  columnCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionContainer: {
    paddingHorizontal: normalize(25)
  },
  simpleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(20),
    //   borderWidth: 1,
    borderColor: COLORS.DARK + 40,
    borderRadius: normalize(10),
    backgroundColor: COLORS.WHITE,
    marginTop: normalize(25),
    elevation: 1

  }
});

export default styles;
