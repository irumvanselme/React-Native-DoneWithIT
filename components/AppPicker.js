import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Modal,
    Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../layouts/Screen";

function AppPicker() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons
                        name="apps"
                        color="gray"
                        size={25}
                    />
                    <Text style={styles.input}>Category</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color="gray"
                        size={25}
                    />
                </View>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button
                        title="CLOSE"
                        onPress={() => setModalVisible(false)}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
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

export default AppPicker;
