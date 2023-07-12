import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommentStyle} from '../../styles/common';

function ProgressScreen() {
  return (
    <SafeAreaView style={CommentStyle.container}>
      <Text>Progress</Text>
    </SafeAreaView>
  );
}

export default ProgressScreen;
