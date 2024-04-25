import React from 'react';
import {Text, Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

function DetailsScreen({navigation}) {
  AsyncStorage.getItem('my-key').then(value => {
    console.log(value);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailsScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen options={{headerShown: false}} name="Home" component={Home} />
        <Screen
          name="Details"
          options={{headerShown: false}}
          component={DetailsScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
