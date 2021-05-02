import React, { useState } from "react";
import AppPicker from "./components/AppPicker";
import Screen from "./layouts/Screen";

export default function App() {
    const [value, setValue] = useState(false);
    return (
        <Screen>
            <AppPicker />
        </Screen>
    );
}
