import React from 'react';
import {View, Text, Image} from 'react-native';

/* Component */
import {launchImageLibrary} from 'react-native-image-picker';

import Button from '../Button/Button';
import Error from '../../Error/Error';

/* Model */
import {GetImgInterface} from '../../../models/Image';

/* Style */
import GetImgStyle from './GetImgStyle';

const GetImg: React.FC<GetImgInterface> = ({
  label,
  name,
  image,
  setImage,
  error,
}) => {
  const selectPic = () => {
    const options: any = {
      path: 'images',
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      response.assets?.map(el => {
        const {base64, type, fileName, width, height} = el;

        setImage({
          base64,
          type,
          fileName,
          width,
          height,
        });
      });

      if (response.didCancel) {
        console.log('User  cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response);
      }
    });
  };

  const {formItem, formItemText, formImageContainer, formImage} = GetImgStyle;

  const ImageComponent =
    typeof image.base64 === 'string' && image.base64.length > 0 ? (
      <Image
        source={{uri: `data:${image.type};base64, ${image.base64}`}}
        style={formImage}
      />
    ) : (
      <View style={formImage}></View>
    );

  return (
    <View style={formItem}>
      <Text style={formItemText}>{label}</Text>
      <Button name={name} props={selectPic} />
      <View style={formImageContainer}>{ImageComponent}</View>
      {error.length > 0 && <Error error={error} />}
    </View>
  );
};

export default GetImg;
