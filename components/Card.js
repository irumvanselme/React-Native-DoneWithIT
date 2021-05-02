import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} />
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        elevation: 40,
        borderRadius: 15,
        marginBottom: 20,
    },
});
export default Card;
