import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerTintColor: 'white',
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
        headerTitleAlign: 'center', // Add this line to center the header title
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Sticker Smash',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: 'About',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
