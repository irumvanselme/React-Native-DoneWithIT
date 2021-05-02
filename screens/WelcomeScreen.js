import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.backround}
            source={require("../assets/background.jpg")}
        >
            <View style={{ flexGrow: 1, alignItems: "center", top: 50 }}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={require("../assets/logo-red.png")}
                />
                <Text>This is a logo</Text>
            </View>
            <View style={styles.logInButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backround: {
        flex: 1,
    },
    logInButton: {
        backgroundColor: "tomato",
        height: 50,
    },
    registerButton: {
        backgroundColor: "dodgerblue",
        height: 50,
    },
});

export default WelcomeScreen;
