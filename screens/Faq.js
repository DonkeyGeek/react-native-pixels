import React from 'react'
import { Text, View } from 'react-native'
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const Faq = () => {
    return (
        <View>
            <Text>Faq</Text>
        </View>
    )
}

Faq.navigationOptions = ({navigation}) => {
    return {
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent={MaterialIconsHeader}
            >
                <Item 
                    title="Menu"
                    iconName="menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    }
}

export default Faq