import {StyleSheet} from 'react-native';

const GetImgStyle = StyleSheet.create({
  formItem: {
    marginTop: 10,
  },

  formItemText: {
    marginLeft: 10,
  },

  formImage: {
    width: 200,
    height: 'auto',
    aspectRatio: 1 / 1,
    marginTop: 20,
  },

  formAddImg: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9F2B68',
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
  },

  formAddImgText: {
    color: 'white',
    fontWeight: '500',
  },

  formImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GetImgStyle;
