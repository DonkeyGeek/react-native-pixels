import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import Colors from '../styles/Colors'

const CustomSwitch = (props) => {
    return (
        <View style={styles.settingContainer}>
            <Text style={styles.settingsLabel}>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.handleSwitch}
                trackColor={{ false: Colors.lightGrey, true: Colors.clicked }}
                thumbColor={props.state && Colors.white}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    settingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: 14
    },
    settingsLabel: {
        fontSize: 19
    }
})

export default CustomSwitch
