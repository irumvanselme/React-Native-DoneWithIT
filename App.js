import React, { useState } from "react";
import { Switch } from "react-native";
import FormControl from "./components/FormControl";
import Screen from "./layouts/Screen";

export default function App() {
    const [value, setValue] = useState(false);
    return (
        <Screen>
            <Switch
                value={value}
                onValueChange={(newValue) => setValue(newValue)}
            />
        </Screen>
    );
}
