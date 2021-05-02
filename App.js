import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./components/AppButton";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <WelcomeScreen />
        </View>
    );
}
