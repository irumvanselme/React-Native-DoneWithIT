import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ListItem from "../components/ListItem";

function ItemView() {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../assets/jacket.jpg")}
            />
            <View style={{ padding: 15, paddingHorizontal: 20 }}>
                <Text
                    style={{ marginBottom: 5, fontSize: 18, fontWeight: "700" }}
                >
                    Red Jacket for sale
                </Text>
                <Text
                    style={{
                        marginBottom: 5,
                        fontSize: 18,
                        color: "dodgerblue",
                    }}
                >
                    $100
                </Text>
            </View>
            <ListItem
                image={require("../assets/mosh.jpg")}
                title="IRUMVA Anselme"
                subTitle="5 Listing"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
});

export default ItemView;
