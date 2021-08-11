import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import FaqStackNav from './FaqStackNav';
import BottomTabNav from './BottomTabNav';
import Colors from '../styles/Colors';


const RouteConfig = {
    Home: {
        screen: BottomTabNav,
        navigationOptions: {
            drawerLabel: 'Accueil'
        }
    },
    Faq: {
        screen: FaqStackNav,
        navigationOptions: {
            drawerLabel: 'FAQ'
        }
    }
}

const DrawerNavigatorConfig = {
    hideStatusBar: true,
    drawerBackgroundColor: Colors.darkGrey,
    drawerWidth: 110,
    drawerType: 'slide',
    contentOptions: {
        labelStyle: {
            fontSize: 19
        },
        inactiveTintColor: Colors.white,
        activeTintColor: Colors.clicked
    }

}

const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);
export default createAppContainer(MainNavigator);