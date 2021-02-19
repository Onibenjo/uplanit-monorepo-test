import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Image as ImageView,
  StatusBar,
} from 'react-native';

const App = () => {
  const [imageSrc, setImageSrc] = React.useState('');

  const changeLink = () => {
    const images = ['', '', '', ''];
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
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
