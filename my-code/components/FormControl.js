import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FormControl({ icon, placeholder, errors, ...props }) {
    return (
        <>
            <View style={styles.container}>
                <MaterialCommunityIcons name={icon} color="gray" size={25} />
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    {...props}
                />
            </View>
            <Text
                style={{
                    color: "red",
                    paddingLeft: 20,
                    paddingTop: 2,
                    paddingBottom: 12,
                }}
            >
                {errors}
            </Text>
        </>
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
        flex: 1,
    },
});

export default FormControl;
