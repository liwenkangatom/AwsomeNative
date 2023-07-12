import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Setting';
import FeedScreen from '../screens/Feed';

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Feed" component={FeedScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
