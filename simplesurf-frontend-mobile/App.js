import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Booking from './Booking/Booking';
import Appbar from './UI/Appbar';
import Login from './Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
 * 
 * View è la corrispondente del div in react,
 * non esistono elementi html, ma bisogna usare quelli di react native
 * 
 * npm install react-calendar
 * npm install react-native-select-dropdown
 * npm install @react-navigation/native @react-navigation/native-stack        per navigare tra le pagine siccome non esiste il routing su native
 * expo install react-native-screens react-native-safe-area-context
 * 
 */


const HomeScreen = ({ navigation }) => {
  return (
    /*<Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />*/
    <Login navigation={navigation}/>
  );
};



const ProfileScreen = ({ navigation, route }) => {
  return <Booking loggedId={route.params.id} navigation={navigation}/>;
};


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

