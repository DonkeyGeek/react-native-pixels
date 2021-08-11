import { createStackNavigator } from 'react-navigation-stack';
import Faq from '../screens/Faq'
import Colors from '../styles/Colors';

const screens = {
    Faq: {
        screen: Faq,
        navigationOptions: {
            title: 'FAQ',
        }
    },
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

const FaqStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default FaqStackNav;