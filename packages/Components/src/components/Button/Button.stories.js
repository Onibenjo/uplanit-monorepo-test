import React from 'react';
import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
import Button from './Button';
import {View} from 'react-native';

export const actions = {
  // onPinTask: action('onPinTask'),
  // onArchiveTask: action('onArchiveTask'),
};

export const Center = ({children}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }}>
    {children}
  </View>
);

storiesOf('Button', module)
  .addDecorator((story) => <Center>{story()}</Center>)
  .add('black', () => (
    <Button
      backgroundColor="#000"
      textColor="#FFF"
      buttonText="Button"
      {...actions}
    />
  ))
  .add('white', () => (
    <Button
      backgroundColor="#FFF"
      textColor="#000"
      buttonText="Button 2"
      {...actions}
    />
  ));
