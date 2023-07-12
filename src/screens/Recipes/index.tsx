import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommentStyle} from '../../styles/common';

function RecipesScreen() {
  return (
    <SafeAreaView style={CommentStyle.container}>
      <Text>Recipes</Text>
    </SafeAreaView>
  );
}

export default RecipesScreen;
