import {FC, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  name: string;
}
const tabIconMap: {[key: string]: string} = {
  Diary: 'ios-newspaper',
  Community: 'ios-planet',
  Post: 'add-circle',
  Progress: 'md-bar-chart',
  Recipes: 'md-beer',
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 12,
  },
});
const TabBarIcon: FC<TabBarIconProps> = ({focused, color, size, name}) => {
  const iconName = useMemo(() => {
    const iconActiveName = tabIconMap[name];
    const iconInactiveName = `${iconActiveName}-outline`;
    return focused ? iconActiveName : iconInactiveName;
  }, [focused, name]);
  const isAddButton = useMemo(() => {
    return name === 'Post';
  }, [name]);

  if (isAddButton) {
    return (
      <View style={styles.addButton}>
        <Ionicons
          name={'add-circle'}
          size={70}
          color={'tomato'}
          style={{
            top: -2,
            left: 2,
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={size} color={color} />
      <Text style={{...styles.name, color: color}}>{name}</Text>
    </View>
  );
};
export default TabBarIcon;
