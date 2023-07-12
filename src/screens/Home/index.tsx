import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {customTransition} from '../../styles/animations';

const Style = StyleSheet.create({
  Page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    border: '1px solid black',
    borderRadius: 10,
  },
});
function HomeScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = useState('Useless Text');
  return (
    <SafeAreaView style={Style.Page}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={Style.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Style.inner}>
            <Text style={Style.header}>Header</Text>
            <Animated.View
              style={Style.box}
              sharedTransitionTag="tag"
              sharedTransitionStyle={customTransition}>
              <Text> {text}</Text>
            </Animated.View>
            <TextInput
              placeholder="Username"
              value={text}
              onChangeText={onChangeText}
              style={Style.textInput}
            />
            <View style={Style.btnContainer}>
              <Button title="Submit" onPress={() => null} />
              <Button
                title="Go to Feed"
                onPress={() => navigation.navigate('Feed')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default HomeScreen;
