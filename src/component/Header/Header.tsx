import React from 'react';
import {Text, View} from 'react-native';

/* Models */
import {HeaderInterface} from '../../models/Header';

/* Style */
import HeaderStyle from './HeaderStyle';

const Header: React.FC<HeaderInterface> = ({title, subtitle}) => {
  const {header, headerTitle, headerSubtitle} = HeaderStyle;

  return (
    <View style={header}>
      <Text style={headerTitle}>{title}</Text>
      <Text style={headerSubtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;
