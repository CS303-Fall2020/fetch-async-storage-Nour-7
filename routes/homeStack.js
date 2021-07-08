import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import TodoDetails from '../screens/todoDetails';


const Stack = createStackNavigator()

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator
         screenOptions={{
            title: 'My Todos', 
            headerTitleAlign: 'center',
             headerStyle: {
                backgroundColor: '#228B22'},

            headerTitleStyle: {
                alignSelf: 'center',
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
          }
      }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TodoDetails' component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}