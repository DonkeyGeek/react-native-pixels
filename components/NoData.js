import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Colors from '../styles/Colors';

const NoData = ({ children }) => {
    return (
        <ImageBackground
            source={{url: 'https://cdn.pixabay.com/photo/2016/11/29/08/27/fog-1868416_960_720.jpg'}}
            style={styles.emptyMsgWrapper}
        >
            <Text style={styles.emptyMsgText}>{children}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    emptyMsgWrapper: {
        flex: 1,
        backgroundColor: Colors.lightbrown
    },
    emptyMsgText: {
        textAlign: 'center',
        marginTop: 50,
        color: Colors.darkGrey,
        fontSize: 23
    }
})

export default NoData
