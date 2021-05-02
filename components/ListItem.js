import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ListItem({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={image} style={styles.image} />
            </View>
            <View style={{ paddingLeft: 20 }}>
                <Text>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
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
