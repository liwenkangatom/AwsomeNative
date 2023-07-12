import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommentStyle} from '../../styles/common';

function LoginScreen() {
  return (
    <SafeAreaView style={CommentStyle.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
}

export default LoginScreen;
