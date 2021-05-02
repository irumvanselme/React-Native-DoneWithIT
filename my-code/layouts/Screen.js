import React from "react";
import { StatusBar, View } from "react-native";

function Screen({ children }) {
    return (
        <View
            style={{
                padding: 20,
                paddingTop: StatusBar.currentHeight + 20,
                flex: 1,
                backgroundColor: "#eee",
            }}
        >
            {children}
        </View>
    );
}

export default Screen;
