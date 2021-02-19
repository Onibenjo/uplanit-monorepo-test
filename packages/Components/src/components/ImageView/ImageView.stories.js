import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ImageView from './ImageView';
//
export const imageUrl = {
  source: 'https://source.unsplash.com/random?recipe',
  noSource: '',
};

storiesOf('Image View', module)
  .add('With Source', () => <ImageView imageSrc={imageUrl.source} />)
  .add('Without Source', () => <ImageView imageSrc={imageUrl.noSource} />);
