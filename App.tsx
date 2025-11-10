import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';
import TabNavigator from './navigation/TabNavigator';
import CategoryDetailScreen from './screens/CategoryDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // 웹에서 CSS 파일 로드
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/app.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen 
          name="CategoryDetail" 
          component={CategoryDetailScreen}
          options={{
            presentation: 'card',
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
