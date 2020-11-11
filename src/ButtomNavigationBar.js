import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const styles = {
    $hide: {display: 'none'},

    container: {
        height: 60,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'conter',
    },
    button: {

    },
    buttonTitle:{
        color: '#fff',
        fontSize: 20,
    }
}

const ButtomNavigationBar = () => (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
    </NavigationContainer>
);

export default ButtomNavigationBar;