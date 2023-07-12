import {Image, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  Image: {width: 50, height: 50},
});

function LogoTitle() {
  return (
    <Image
      style={Style.Image}
      source={require('../../assets/images/home.png')}
    />
  );
}
export default LogoTitle;
