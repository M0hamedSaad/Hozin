import { StyleSheet } from 'react-native';
import { COLORS, normalize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(35)
  },
  simpleRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: normalize(24),
    height: normalize(24)
  },
  img: {
    width: normalize(95),
    height: normalize(95),
    borderRadius: normalize(6),
    backgroundColor: COLORS.DARK + 30
  },
  cardContainer: {
    width: normalize(325),
    padding: normalize(15),
    borderRadius: normalize(10),
    height: normalize(125),
    backgroundColor: COLORS.WHITE,
    elevation: 1,
    marginVertical: normalize(35),
    flexDirection: 'row'
  },
  columnContainer:
  {
    flex: 1,
    marginStart: normalize(15),
    justifyContent: 'space-between'
  },
  btn: {
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto'
  }

});

export default styles;
