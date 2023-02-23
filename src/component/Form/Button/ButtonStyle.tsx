import {StyleSheet} from 'react-native';

const ButtonStyle = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#9F2B68',
    width: '50%',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: '#9F2B68',
    marginTop: 20,
    width: '80%',
  },

  submitText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default ButtonStyle;
