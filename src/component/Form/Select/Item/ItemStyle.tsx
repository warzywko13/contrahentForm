import {StyleSheet} from 'react-native';

/* Const */
import {
  DarkColor,
  PrimaryColor,
  SecondaryColor,
} from '../../../../const/Settings';

const ItemStyle = StyleSheet.create({
  item: {
    width: '48%',
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: DarkColor,
    borderRadius: 5,
  },

  itemText: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    color: DarkColor,
    textAlign: 'center',
  },

  itemActive: {
    backgroundColor: PrimaryColor,
    color: SecondaryColor,
    fontWeight: '500',
  },
});

export default ItemStyle;
