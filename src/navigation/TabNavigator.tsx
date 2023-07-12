import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import DiaryScreen from '../screens/Diary';
import CommunityScreen from '../screens/Community';
import ProgressScreen from '../screens/Progress';
import RecipesScreen from '../screens/Recipes';
import PostScreen from '../screens/Post';
import TabBarIcon from '../components/TabBarIcon';
import {View, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = (props: BottomTabBarButtonProps) => {
  const {children, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress as any}
      style={{
        top: -10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabBarIcon
              focused={focused}
              color={color}
              size={size}
              name={route.name}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarButton: props => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Recipes" component={RecipesScreen} />
    </Tab.Navigator>
  );
}
export default TabNavigation;
