import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={2}
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
                <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>
            <AppButton title="LOG IN" />
            <AppButton title="REGISTER" color="dodgerblue" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backround: {
        flex: 1,
        padding: 10,
    },
    tagLine: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 20,
    },
});

export default WelcomeScreen;
