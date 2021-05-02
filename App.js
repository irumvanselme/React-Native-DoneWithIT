import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./my-code/layouts/Screen";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Here is the Tweets</Text>
        <Button
            title="View Tweet"
            onPress={() => navigation.navigate("TweetDetails")}
        />
    </Screen>
);

const TweetDetails = () => (
    <Screen>
        <Text>Here is the Tweet Details</Text>
    </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
