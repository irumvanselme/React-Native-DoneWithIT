import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";

const messages = [
    {
        id: 1,
        name: "N1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 1,
        name: "N1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
];

function MessagesScreen(props) {
    return (
        <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
                <ListItem
                    title={item.name}
                    subTitle={item.description}
                    image={item.image}
                />
            )}
        />
    );
}

export default MessagesScreen;
