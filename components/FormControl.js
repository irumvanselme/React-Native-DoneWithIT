import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FormControl(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="email" color="gray" size={25} />
            <TextInput placeholder="Enter a text" style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
    },
    icon: {},
    input: {
        marginLeft: 15,
        fontSize: 16,
    },
});

export default FormControl;
