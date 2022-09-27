import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import screens
import HomeScreen from "./src/pages/HomeScreen"
import EarningsScreen from "./src/pages/EarningsScreen"
import HelpScreen from "./src/pages/HelpScreen"
import LoginScreen from "./src/pages/LoginScreen"
import MyAccountScreen from "./src/pages/MyAccountScreen"
import MyJobsScreen from "./src/pages/MyJobsScreen"
import RegisterScreen from "./src/pages/RegisterScreen"
//import modals
import Schedule from './src/components/Schedule'
import Timer from './src/components/Timer'
import JobRequest from './src/components/JobRequest'
import Messages from './src/components/Messages'
import Message from './src/components/Message'
//import icons
import Icon from 'react-native-vector-icons/FontAwesome';
import MoreTime from './src/components/MoreTime';
//add redux
import { useSelector, useDispatch } from 'react-redux'
import Slot from './src/components/Slot';
import StringsOfLanguages from './src/utils/localizations';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeStack() {
  const auth = useSelector((state) => state.auth)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen} options={{ title: StringsOfLanguages.welcome+', '+auth.data.name }} />
      <Stack.Screen name="Schedule" component={Schedule} options={{ title: StringsOfLanguages.schedule}} />
      <Stack.Screen name="Slot" component={Slot} options={{ title: StringsOfLanguages.slot}} />
      <Stack.Screen name="Timer" component={Timer} options={{ title: StringsOfLanguages.timer}} />
      <Stack.Screen name="Extend Time" component={MoreTime} options={{ title: StringsOfLanguages.more_time}} />
      <Stack.Screen name="Message" component={Message} options={{ title: StringsOfLanguages.message}} />
      <Stack.Screen name="Job Request" component={JobRequest} options={{ title: StringsOfLanguages.job_request}} />
    </Stack.Navigator>
  );
}

function JobStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={MyJobsScreen} options={{ title: StringsOfLanguages.dashboard }} />
      <Stack.Screen name="Messages" component={Messages} options={{ title: StringsOfLanguages.all_messages }} />
      <Stack.Screen name="Message" component={Message} options={{ title: StringsOfLanguages.message}} />
      <Stack.Screen name="Job Request" component={JobRequest} options={{ title: StringsOfLanguages.job_request}} />
    </Stack.Navigator>
  );
}

export default function App() {
const auth = useSelector((state) => state.auth)
const displayed = false

useEffect(() => {
  if(auth.data.language){
    StringsOfLanguages.setLanguage(auth.data.language)
  }
}, [auth, auth.data, auth.data.language])


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } 
            if (route.name === 'Earnings') {
              iconName = focused
                ? 'dollar'
                : 'dollar';
            }  
            if (route.name === 'My Jobs') {
              iconName = focused
                ? 'hdd-o'
                : 'hdd-o';
            }  
            if (route.name === 'Help') {
              iconName = focused
                ? 'life-bouy'
                : 'life-bouy';
            }  
            if (route.name === 'My Account') {
              iconName = focused
                ? 'user-circle'
                : 'user-circle';
            }
            if (route.name === 'Register') {
              iconName = focused
                ? 'vcard'
                : 'vcard';
            } else if (route.name === 'Login') {
              iconName = focused ? 'sign-in' : 'sign-in';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0a84ff',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        {auth.loading ?
        <>
        <Tab.Screen name="Login" options={{title:StringsOfLanguages.login}} component={LoginScreen} />
        <Tab.Screen name="Register" options={{title:StringsOfLanguages.register}} component={RegisterScreen} />
        </>
        :
        <>
        <Tab.Screen name="Home" options={{title:StringsOfLanguages.home}} component={HomeStack} />
        <Tab.Screen name="Earnings" component={EarningsScreen} options={{ title: StringsOfLanguages.earnings }} />
        <Tab.Screen name="My Jobs" component={JobStack} options={{ title: StringsOfLanguages.my_jobs }} />
        <Tab.Screen name="Help" component={HelpScreen} options={{ title: StringsOfLanguages.help }} />
        <Tab.Screen name="My Account" component={MyAccountScreen} options={{ title: StringsOfLanguages.my_account }} />
        </>
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}