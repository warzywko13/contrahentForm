import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

/* Model */
import {RegisterAfterItem} from '../../../../models/RegisterAfter';

/* Style */
import ItemStyle from './ItemStyle';

const Item: React.FC<RegisterAfterItem> = ({
  id,
  name,
  registerAfter,
  handleRegisterAfter,
}) => {
  const {item, itemText, itemActive} = ItemStyle;
  const active = id === registerAfter ? itemActive : null;

  return (
    <TouchableOpacity style={item} onPress={() => handleRegisterAfter(id)}>
      <Text style={[itemText, active]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Item;
