import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' />
        <Button label='Use this photo' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 50,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
