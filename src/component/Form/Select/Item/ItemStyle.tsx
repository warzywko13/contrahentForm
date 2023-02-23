import {StyleSheet} from 'react-native';

const ItemStyle = StyleSheet.create({
  item: {
    width: '48%',
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },

  itemText: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    color: '#000000',
    textAlign: 'center',
  },

  itemActive: {
    backgroundColor: '#9F2B68',
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default ItemStyle;
