import React from "react";
import { Text, View } from "react-native";
import Card from "./components/Card";
export default function App() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#f8f4f4",
                padding: 20,
                paddingTop: 40,
            }}
        >
            <Card
                title="Red Jacket for sale"
                subTitle="$100"
                image={require("../assets/jacket.jpg")}
            />
        </View>
    );
}
