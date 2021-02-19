import React from 'react';
import {
  // Button,
  StyleSheet,
  View,
  // Image as ImageView,
  StatusBar,
} from 'react-native';
import {
  Button, ImageView,
} from '@uplanit/components';

const App = () => {
  const [imageSrc, setImageSrc] = React.useState('https://source.unsplash.com/random?food');

  const changeLink = () => {
    const images = ['https://source.unsplash.com/random?recipe', 'https://source.unsplash.com/random?tea', 'https://source.unsplash.com/random?sport', 'https://source.unsplash.com/random?car'];
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageSrc(images[randomIndex]);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <ImageView imageSrc={imageSrc} />
        <Button changeLink={changeLink} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
