import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormScreen } from './screens/FormScreen';
import MenuScreen from './screens/MenuScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'List Menu') {
              iconName = focused
                ? 'ios-list'
                : 'ios-list-outline';
            } else if (route.name === 'Pesan') {
              iconName = focused ? 'ios-create' : 'ios-create-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="List Menu" component={MenuScreen} />
          <Tab.Screen name="Pesan" component={FormScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}