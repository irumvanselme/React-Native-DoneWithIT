import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ image, title, subTitle, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <View>
                        <Image source={image} style={styles.image} />
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                        <Text>{title}</Text>
                        <Text>{subTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
});

export default ListItem;
