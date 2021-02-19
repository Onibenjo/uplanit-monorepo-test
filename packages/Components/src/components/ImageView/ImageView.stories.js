import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ImageView from './ImageView';
import {Center} from '../Button/Button.stories';
//
export const imageUrl = {
  source:
    'https://images.unsplash.com/photo-1603209217132-3644d4511dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
  noSource: '',
};

storiesOf('Image View', module)
  .addDecorator((story) => <Center>{story()}</Center>)
  .add('source', () => <ImageView imageSrc={imageUrl.source} />)
  .add('no source', () => <ImageView imageSrc={imageUrl.noSource} />);
