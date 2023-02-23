import React from 'react';
import {View, Text, TextInput} from 'react-native';

/* Component */
import Error from '../../Error/Error';

/* Models */
import {InputInterface} from '../../../models/Input';

/* Style */
import InputStyle from './InputStyle';

const Input: React.FC<InputInterface> = ({
  label,
  placeholder,
  name,
  error,
  props,
}) => {
  const {formItem, formItemText, formItemInput} = InputStyle;

  return (
    <View style={formItem}>
      <Text style={formItemText}>{label}</Text>
      <TextInput
        style={formItemInput}
        placeholder={placeholder}
        onChangeText={text => props(text)}
        value={name}></TextInput>
      {error.length > 0 && <Error error={error} />}
    </View>
  );
};

export default Input;
