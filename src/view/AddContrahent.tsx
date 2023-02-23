import React from 'react';
import {ScrollView} from 'react-native';

import Header from '../component/Header/Header';
import Form from '../component/Form/Form';

const AddContrahent: React.FC = () => {
  return (
    <ScrollView>
      <Header
        title="Rejestracja Kontrahenta"
        subtitle="Dodawanie nowego kontrahenta do systemu"
      />
      <Form />
    </ScrollView>
  );
};

export default AddContrahent;
