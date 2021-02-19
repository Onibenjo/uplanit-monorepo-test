import React from 'react';
import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
import Button from './Button';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  // onPinTask: action('onPinTask'),
  // onArchiveTask: action('onArchiveTask'),
};

storiesOf('Button', module)
  .add('Black', () => (
    <Button
      backgroundColor="#000"
      textColor="#FFF"
      buttonText="Button"
      {...actions}
    />
  ))
  .add('White', () => (
    <Button
      backgroundColor="#FFF"
      textColor="#000"
      buttonText="Button 2"
      {...actions}
    />
  ));
