import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 20,
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{ width: 50, height: 50, backgroundColor: "tomato" }}
                />
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "dodgerblue",
                    }}
                />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;
