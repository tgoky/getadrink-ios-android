import React from 'react';
import { Location, Order, OrderDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen'

import { Home, Rewards } from "./screens"

import Tabs from "./navigation/tabs";
import { COLORS } from './constants';

const Stack = createStackNavigator();

const App = () => {

    // React.useEffect(() => {
    //     SplashScreen.hide();
    // }, [])

    return (
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
    )
}

export default App;