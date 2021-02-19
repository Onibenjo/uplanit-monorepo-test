// Component 1 will be a simple button. The button should accept as input
// A function called changeLink
// A string called backgroundColor
// A string called textColor
// A string called buttonText (this will be displayed in the button)

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = ({changeLink, backgroundColor, textColor, buttonText}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={changeLink}
        style={{
          backgroundColor,
        }}>
        <Text style={{color: textColor}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
