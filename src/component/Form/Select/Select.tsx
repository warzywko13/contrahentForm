import React from 'react';
import {Text, View} from 'react-native';

/* Components */
import Item from './Item/Item';

/* Constant */
import {TableRegisterAfter} from '../../../const/Settings';

/* Models */
import {RegisterAfterListInterface} from '../../../models/RegisterAfter';

/* Style */
import SelectStyle from './SelectStyle';

const List: React.FC<RegisterAfterListInterface> = ({
  registerAfter,
  handleRegisterAfter,
  label,
}) => {
  const {selectItem, selectItemText, select} = SelectStyle;

  return (
    <View style={selectItem}>
      <Text style={selectItemText}>{label}</Text>
      <View style={select}>
        {TableRegisterAfter.map(({id, name}) => (
          <Item
            id={id}
            name={name}
            key={id}
            handleRegisterAfter={handleRegisterAfter}
            registerAfter={registerAfter}
          />
        ))}
      </View>
    </View>
  );
};

export default List;
