import {StyleSheet} from 'react-native';

/* Const */
import {PrimaryColor, SecondaryColor} from '../../../const/Settings';

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
    backgroundColor: PrimaryColor,
    width: '50%',
    marginTop: 10,
  },

  buttonText: {
    color: SecondaryColor,
    fontWeight: '500',
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: PrimaryColor,
    marginTop: 20,
    width: '80%',
  },

  submitText: {
    color: SecondaryColor,
    fontWeight: '500',
    fontSize: 18,
  },
});

export default ButtonStyle;
