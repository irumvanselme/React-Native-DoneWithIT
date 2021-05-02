import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={{ padding: 15, paddingHorizontal: 20 }}>
                <Text style={{ marginBottom: 5, fontSize: 16 }}>{title}</Text>
                <Text
                    style={{
                        marginBottom: 5,
                        fontSize: 18,
                        color: "dodgerblue",
                    }}
                >
                    {subTitle}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
    },
});
export default Card;
