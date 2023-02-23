import {StyleSheet} from 'react-native';

const SelectStyle = StyleSheet.create({
  select: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
  },

  selectItem: {
    marginTop: 10,
  },

  selectItemText: {
    marginLeft: 10,
  },
});

export default SelectStyle;
