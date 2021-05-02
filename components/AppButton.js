import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress, color = "tomato" }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        backgroundColor: "tomato",
        width: "100%",
        borderRadius: 50,
        marginBottom: 20,
        elevation: 10,
    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default AppButton;
