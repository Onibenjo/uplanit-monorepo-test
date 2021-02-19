// Component 2 will be an Image view component. It should take as input
// A url string to an image called imageSrc. If the imageSrc is not provided it should show a message “Please provide image url”.

import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageView = ({imageSrc}) => {
  return (
    <View>
      {imageSrc ? (
        <Image
          // source={require('../../assets/1.jpg')}
          source={{uri: imageSrc}}
          height={140}
          width={140}
          resizeMode={'contain'}
          style={{width: 200}}
        />
      ) : (
        <Text>Please provide image url</Text>
      )}
    </View>
  );
};

export default ImageView;
