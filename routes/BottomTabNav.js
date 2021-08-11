import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import StackNav from './HomeStackNav';
import SelectedStackNav from './SelectedStackNav';
import Colors from '../styles/Colors';

const RouteConfigs = {
    Home: {
        screen: StackNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />,
            tabBarLabel: 'Accueil',
            tabBarColor: Colors.lightBrown
        }
    },
    Likes: {
        screen: SelectedStackNav,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <MaterialIcons name="thumb-up" size={24} color={tintColor} />,
            title: "Sélection",
            tabBarColor: Colors.darkGrey
        }
    }
}

const TabNavigatorConfig = {
    tabBarOptions: {
        inactiveTintColor: Colors.darkGrey,
        activeTintColor: Colors.clicked
    }
}

const MaterialBottomTabNavigatorConfig = {
    inactiveColor: Colors.white,
    shifting: true
}

const BottomTabNav = Platform.OS === 'android' ? 
                    createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig) : 
                    createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNav;