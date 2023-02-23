import React from 'react';
import {Text} from 'react-native';

/* Model */
import {ErrorInterface} from '../../models/Error';

/* Style */
import ErrorStyle from './ErrorStyle';

const Error: React.FC<ErrorInterface> = ({error}) => {
  const {textError} = ErrorStyle;

  return <Text style={textError}>{error}</Text>;
};

export default Error;
