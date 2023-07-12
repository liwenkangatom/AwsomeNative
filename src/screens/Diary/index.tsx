import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommentStyle} from '../../styles/common';

function DiaryScreen() {
  return (
    <SafeAreaView style={CommentStyle.container}>
      <Text>Diary</Text>
    </SafeAreaView>
  );
}

export default DiaryScreen;
