import React, { useState, useEffect } from 'react'
import { FlatList, View, Modal, StyleSheet, Text } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer';
import PressableItems from '../components/PressableItems';
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import NoData from '../components/NoData';
import { MaterialIcons } from '@expo/vector-icons'; 
import Settings from '../components/Settings';

import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {

    useEffect(() => {
        navigation.setParams({ handleModal: handleSettingsModal })
    }, [handleSettingsModal]);

    const [modalVisible, setModalVisible] = useState(false);

    const selectedCategories = useSelector(state => state.users.selectedCategories);

    const renderProfiles = ({item}) => {
        return <PressableItems 
                    item={item}
                    handleNavigate={() => navigation.navigate('Portfolio', item)}
               />
    }

    const handleSettingsModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={globalStyles.container}>
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <View style={styles.modalBody}>
                    <MaterialIcons 
                       name="close" 
                       size={24} 
                       style={styles.modalClose}
                       onPress={handleSettingsModal}
                    />

                    <Settings closeModal={handleSettingsModal} />

                </View>
            </Modal>

            <FlatList 
                data={selectedCategories}
                renderItem={renderProfiles}
                keyExtractor={ item => item.id}
            />
        </View>
    )
    
}

Home.navigationOptions = ({navigation}) => {

    const handleModal = navigation.getParam('handleModal');

    return {
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent={MaterialIconsHeader}
            >
                <Item 
                    title="Menu"
                    iconName="menu"
                    //onPress={() => navigation.toggleDrawer()}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={MaterialIconsHeader}
            >
                <Item 
                    title="Réglages"
                    iconName="settings"
                    onPress={handleModal}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    modalBody: {
        flex: 1,
        backgroundColor: Colors.ghost,
        marginVertical: 60,
        padding: 20,
        alignSelf: "center",
        borderRadius: 10,
        width: '90%'
    },
    modalClose: {
        alignSelf: 'flex-end'
    }
})

export default Home