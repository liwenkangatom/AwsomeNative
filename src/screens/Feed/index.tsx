import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {customTransition} from '../../styles/animations';

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    border: '1px solid black',
    borderRadius: 10,
  },
});

function FeedScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
      <Animated.View
        style={styles.box}
        sharedTransitionTag="tag"
        sharedTransitionStyle={customTransition}>
        <Text>test</Text>
      </Animated.View>
      <Button
        onPress={() => {
          navigation.navigate('Details', {itemId: 86});
        }}
        title="Go to Details"
      />
    </View>
  );
}
export default FeedScreen;
