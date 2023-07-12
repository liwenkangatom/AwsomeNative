import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommentStyle} from '../../styles/common';

function PostScreen() {
  return (
    <SafeAreaView style={CommentStyle.container}>
      <Text>Post</Text>
    </SafeAreaView>
  );
}

export default PostScreen;
