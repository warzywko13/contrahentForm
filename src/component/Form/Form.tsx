import React, {useState} from 'react';
import {View, Alert} from 'react-native';

/* Components */
import axios from 'axios';

import Input from './Input/Input';
import Button from './Button/Button';
import Select from './Select/Select';
import GetImg from './GetImg/GetImg';

/* Models */
import {ImageInterface} from '../../models/Image';

/* Constant */
import {
  TableRegisterAfter,
  Person,
  Company,
  FormatJPEG,
  FormatJPG,
} from '../../const/Settings';

/* Style */
import FormStyle from './FormStyle';

const Form: React.FC = () => {
  /* Input State */
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [registerAfter, setRegisterAfter] = useState(0);
  const [nip, setNip] = useState('');
  const [pesel, setPesel] = useState('');
  const [image, setImage] = useState<ImageInterface>({
    base64: '',
    type: '',
    fileName: '',
    width: 0,
    height: 0,
  });

  /* Error State */
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [nipError, setNipError] = useState('');
  const [peselError, setPeselError] = useState('');
  const [imageError, setImageError] = useState('');

  const handleRegisterAfter = (id: number) => {
    setRegisterAfter(id);

    if (id === Person) {
      setNip('');
    }

    if (id === Company) {
      setPesel('');
    }
  };

  const validation = (): boolean => {
    /* Name Validation */
    if (name.length === 0) {
      setNameError('Imię nie może być puste');
      return false;
    }

    setNameError('');

    /* Surname Validation */
    if (surname.length === 0) {
      setSurnameError('Nazwisko nie może być puste');
      return false;
    }
    setSurnameError('');

    /* PESEL Validation */
    if (registerAfter === Person) {
      /* Pesel Length */
      if (pesel.length === 0) {
        setPeselError('Pesel nie może być pusty');
        return false;
      }

      /* Pesel Regex */
      const regexPesel = new RegExp('^[0-9]{11}$');
      const matchPesel = regexPesel.test(pesel);

      if (!matchPesel) {
        setPeselError('Nip powinien składać się z 11 cyfr bez przerw');
        return false;
      }
    }
    setPeselError('');

    /* NIP Validation */
    if (registerAfter === Company) {
      /* NIP Length */
      if (nip.length === 0) {
        setNipError('NIP nie może być pusty');
        return false;
      }

      /* NIP Regex */
      const regexNIP = new RegExp(
        '^[0-9]{3}[ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2}$',
      );

      const matchNIP = regexNIP.test(nip);

      if (matchNIP === false) {
        setNipError(
          'NIP musi składać się z cyfr i być oddzielony: NNN NNN NN NN',
        );
        return false;
      }
    }
    setNipError('');

    /* Image Validation */
    if (image.base64?.length === 0) {
      setImageError('Proszę o dodanie zdjęcia');
      return false;
    }

    if (image.type !== FormatJPEG && image.type !== FormatJPG) {
      setImageError('Dopuszczalny format zdjęcia to: JPG oraz JPEG');
      return false;
    }

    if (image.width !== image.height) {
      setImageError(
        'Wymagany Aspect ratio zdjęcia to 1:1 (zdjęcie w kwadracie)',
      );
      return false;
    }

    return true;
  };

  const clearForm = () => {
    setName('');
    setSurname('');
    setRegisterAfter(0);
    setNip('');
    setPesel('');
    setImage({
      base64: '',
      type: '',
      fileName: '',
      width: 0,
      height: 0,
    });
  };

  const handleSend = async () => {
    if (validation() === false) {
      return;
    }

    await axios
      .post('https://localhost:60001/Contractor/Save', {
        name,
        surname,
        registerAfter,
        nip,
        pesel,
        image,
      })
      .then(({data, status}) => {
        if (status !== 200) {
          Alert.alert('Błąd', 'Nie znaleziono metody zapisu');
          return;
        }

        clearForm();
        Alert.alert('Sukces', 'Kontrahent został dodany!');
      })
      .catch(response => {
        Alert.alert('Błąd', 'Nie znaleziono metody zapisu');
        return;
      });
  };

  const registerAfterResult =
    registerAfter === Person ? (
      <Input
        label="PESEL"
        placeholder="PESEL"
        name={pesel}
        error={peselError}
        props={setPesel}
      />
    ) : (
      <Input
        label="NIP"
        placeholder="NIP"
        name={nip}
        error={nipError}
        props={setNip}
      />
    );

  const {formContainer} = FormStyle;

  return (
    <View style={formContainer}>
      <Input
        label="Imie"
        placeholder="Podaj imię"
        name={name}
        error={nameError}
        props={setName}
      />

      <Input
        label="Nazwisko"
        placeholder="Podaj nazwisko"
        name={surname}
        error={surnameError}
        props={setSurname}
      />

      <Select
        label="Typ"
        data={TableRegisterAfter}
        handleRegisterAfter={handleRegisterAfter}
        registerAfter={registerAfter}
      />

      {registerAfterResult}

      <GetImg
        label="Zdjęcie"
        name="Wybierz Zdjęcie"
        image={image}
        setImage={setImage}
        error={imageError}
      />

      <Button name="Dodaj Kontrahenta" props={handleSend} type="submit" />
    </View>
  );
};

export default Form;
