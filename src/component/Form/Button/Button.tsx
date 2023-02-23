import React from 'react';
import {Text, Pressable, View} from 'react-native';

/* Constant */
import {ButtonStandard} from '../../../const/Settings';

/* Models */
import {ButtonInterface} from '../../../models/Button';

/* Style */
import ButtonStyle from './ButtonStyle';

const Button: React.FC<ButtonInterface> = ({
  name,
  props,
  type = ButtonStandard,
}) => {
  const {buttonContainer, button, buttonText, submitButton, submitText} =
    ButtonStyle;

  const buttonStyle = type === ButtonStandard ? button : submitButton;
  const textStyle = type === ButtonStandard ? buttonText : submitText;

  return (
    <View style={buttonContainer}>
      <Pressable style={buttonStyle} onPress={() => props()}>
        <Text style={textStyle}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
