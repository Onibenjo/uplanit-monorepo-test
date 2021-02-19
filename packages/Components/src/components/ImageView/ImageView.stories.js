import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ImageView from './ImageView';
//
export const imageUrl = {
  source: '',
  noSource: '',
};

storiesOf('Image View', module)
  .add('default', () => <ImageView imageSrc={imageUrl.source} />)
  .add('pinned', () => <ImageView imageSrc={imageUrl.noSource} />);
