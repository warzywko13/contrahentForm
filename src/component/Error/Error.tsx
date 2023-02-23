import React from 'react';
import {Text} from 'react-native';

/* Model */
import {ErrorInterface} from '../../models/Error';

/* Style */
import ErrorStyle from './ErrorStyle';

const Error: React.FC<ErrorInterface> = ({name}) => {
  const {textError} = ErrorStyle;

  return <Text style={textError}>{name}</Text>;
};

export default Error;
