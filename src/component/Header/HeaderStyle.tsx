import {StyleSheet} from 'react-native';

/* Const */
import {PrimaryColor, SecondaryColor} from '../../const/Settings';

const HeaderStyle = StyleSheet.create({
  header: {
    paddingLeft: 10,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: PrimaryColor,
    width: '100%',
    borderRadius: 2,
  },

  headerTitle: {
    color: SecondaryColor,
    fontWeight: 'bold',
    fontSize: 30,
  },

  headerSubtitle: {
    fontSize: 15,
    color: SecondaryColor,
  },
});

export default HeaderStyle;
