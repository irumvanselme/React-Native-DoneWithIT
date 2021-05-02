import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function DeleteButton({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                }}
            >
                <MaterialCommunityIcons
                    name="trash-can"
                    color="white"
                    size={35}
                />
                <Text style={{ color: "white", marginTop: 10 }}>Delete</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default DeleteButton;
