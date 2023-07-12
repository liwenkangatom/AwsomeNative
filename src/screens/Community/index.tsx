import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommentStyle} from '../../styles/common';

function CommunityScreen() {
  return (
    <SafeAreaView style={CommentStyle.container}>
      <Text>Community</Text>
    </SafeAreaView>
  );
}

export default CommunityScreen;
