import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import Selected from '../screens/Selected';
import Photo from '../screens/Photo';
import Colors from '../styles/Colors';

const screens = {
    Selected: {
        screen: Selected,
        navigationOptions: {
            title: 'FAVORIS',
        }
    }, 
    Photo: {
        screen: Photo,
        navigationOptions: {
            title: 'PHOTO',
        }
    } 
}

const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? Colors.lightBrown : Colors.darkGrey
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }
}

const SelectedStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default SelectedStackNav ;