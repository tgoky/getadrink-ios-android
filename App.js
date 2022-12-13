import React from 'react';
import { Location, Order, OrderDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen'


import  {legacy_createStore as createStore, applyMiddleware}  from "redux";
// import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import themeReducer from './stores/themeReducer';

import { Home, Rewards } from "./screens"

import Tabs from "./navigation/tabs";
import { COLORS } from './constants';
 
const Stack = createStackNavigator();

const store = createStore(
    themeReducer,
    applyMiddleware(thunk)
)

const App = () => {

    // React.useEffect(() => {
    //     SplashScreen.hide();
    // }, [])

    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                Options={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        headerStyle: {
                          backgroundColor: COLORS.black,
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}

                    
                />

                <Stack.Screen
                    name="Location"
                    component={Location}
                />

                <Stack.Screen
                    name="Order"
                    component={Order}
                />

                <Stack.Screen
                    name="OrderDetail"
                    component={OrderDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;