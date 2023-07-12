import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackScreenProps} from '../../navigation/types';

const Style = StyleSheet.create({
  Page: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

function DetailsScreen() {
  const route = useRoute<RootStackScreenProps<'Details'>['route']>();
  const navigation = useNavigation();
  return (
    <View style={Style.Page}>
      <Text>Details Screen</Text>
      <Text>itemId: {route?.params.itemId}</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
}

export default DetailsScreen;
