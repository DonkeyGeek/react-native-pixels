import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Photo from '../screens/Photo';
import Colors from '../styles/Colors';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil',
            //headerStyle: { backgroundColor: Colors.lightBrown}
        }
    }, 
    Portfolio: {
        screen: Portfolio,
        navigationOptions: {
            title: 'Profil',
            // headerStyle: { backgroundColor: Colors.lightBrown}
        }
    }, 
    Photo: {
        screen: Photo,
        navigationOptions: {
            title: 'Photo',
            //headerStyle: { backgroundColor: Colors.lightBrown}
        }
    } 
}

const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.lightBrown
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }
}

const StackNav = createStackNavigator(screens, defaultNavigationOptions)

export default StackNav;