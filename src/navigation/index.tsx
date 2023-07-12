import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from '../screens/Details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import TabNavigation from './TabNavigator';
import SettingsScreen from '../screens/Setting';

const Stack = createNativeStackNavigator<RootStackParamList>();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.itemId.toString()})}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
