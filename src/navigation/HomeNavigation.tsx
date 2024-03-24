import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@views/Home';
import PublicProfile from '@views/auth/PublicProfile';
import { HomeNavigatorStackParamList } from 'src/@types/navigation';

const Stack = createNativeStackNavigator<HomeNavigatorStackParamList>();

// Removed Props as it's not being used
const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='PublicProfile' component={PublicProfile} />
    </Stack.Navigator>
  );
};
 
const styles = StyleSheet.create({
  container: {} 
});
  
export default HomeNavigator;
