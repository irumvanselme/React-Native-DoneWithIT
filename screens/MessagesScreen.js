import React, { useState } from "react";
import { FlatList, View, StatusBar } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../layouts/Screen";
import DeleteButton from "./../components/DeleteButton";

function MessagesScreen() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            name: "N1",
            description: "D1",
            image: require("../assets/mosh.jpg"),
        },
        {
            id: 2,
            name: "N2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
        },
    ]);
    const [refresh, setRefresh] = useState(false);

    const handleDelete = (id) => {
        console.log(id);
        setMessages(messages.filter((message) => message.id != id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        subTitle={item.description}
                        image={item.image}
                        renderRightActions={() => (
                            <DeleteButton
                                onPress={() => handleDelete(item.id)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            width: "100%",
                            height: 1,
                            marginVertical: 10,
                            backgroundColor: "#eee",
                        }}
                    />
                )}
                refreshing={refresh}
                onRefresh={() => setMessages([messages[0]])}
            />
        </Screen>
    );
}

export default MessagesScreen;
