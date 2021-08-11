import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';

const PressableItems = ({ item, handleNavigate }) => {
    return (
        <Pressable
            onPress={handleNavigate}
            style={({pressed}) => [
                { backgroundColor: pressed ?  Colors.clicked : Colors.white}, 
                globalStyles.profileItem
            ]}
        >
            <Text style={globalStyles.titleText}>{item.name}</Text>
            <Image 
                source={{uri: item.img}}
                style={globalStyles.profileImg}
            />
            <View style={globalStyles.infoContainer}>
                <Text style={globalStyles.infos}>{item.country}</Text>
                <Text style={globalStyles.infos}>{item.photos.length}</Text>
            </View>
        </Pressable>
    )
}

export default PressableItems
