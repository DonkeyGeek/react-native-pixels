import { StyleSheet } from 'react-native'
import Colors from './Colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infoContainer: {
        width: '100%',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infos: {
        fontSize: 20,
        fontFamily: 'InriaSans_300Light'
    },
    titleText: {
        fontSize: 25,
        padding: 9,
        fontFamily: 'InriaSans_700Bold'
    },
    profileImg: {
        width: 350,
        height: 350,
        borderRadius: 14
    },
    profileItem: {
        padding: 15,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'InriaSans_700Bold_Italic',
        fontSize: 25
    }
})