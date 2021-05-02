import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../../components/AppButton";
import FormControl from "../../components/FormControl";
import Screen from "../../layouts/Screen";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require("../../assets/logo-red.png")}
            />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched }) => (
                    <>
                        <FormControl
                            icon="email"
                            placeholder="Email"
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            errors={errors.email}
                        />
                        <FormControl
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry={true}
                            onBlur={() => setFieldTouched("password")}
                            onChangeText={handleChange("password")}
                            errors={errors.password}
                        />
                        <AppButton title="LOG IN" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30,
    },
});

export default LoginScreen;
