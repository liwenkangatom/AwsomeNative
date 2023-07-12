import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsStackScreen from './SettingStack';
import HomeStackScreen from './HomeStack';

const Tab = createBottomTabNavigator();
function MainTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'hourglass-empty';

          if (route.name === 'HomeStack') {
            iconName = focused ? 'planet' : 'home';
          } else if (route.name === 'SettingsStack') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}
export default MainTabNavigation;
