import React from "react";
import { StatusBar, View } from "react-native";

function Screen({ children }) {
    return (
        <View style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
            {children}
        </View>
    );
}

export default Screen;
