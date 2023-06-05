import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../../../common/hooks";
import { resetAll } from "../../redux/slice/accountSlice";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_DETAIL } from "../../navigation/screens";
import Container from "../_common/Container";
import DefaultText from "../_common/Default/DefaultText";
import DefaultButton from "../_common/Default/DefaultButton";
import { useBroadcastContext } from "@choiuhana/library-react-base";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_DETAIL>;

const ScreenDetail = ({ route, navigation }: Props) => {
    const dispatch = useAppDispatch();
    const { colors } = useTheme();
    const { send } = useBroadcastContext();

    return (
        <Container style={styles.container}>
            <DefaultText style={styles.greeting}>Detail Screen</DefaultText>

            <DefaultButton
                text={"send"}
                textStyle={{
                    color: colors.on_primary,
                }}
                style={{ backgroundColor: colors.primary }}
                onPress={() => {
                    send("test");
                }}
            />

            <DefaultButton
                text={"Back"}
                textStyle={{
                    color: colors.on_primary,
                }}
                style={{ backgroundColor: colors.primary }}
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    greeting: {
        fontSize: 20,
        // fontWeight: "bold",
        margin: 16,
    },
});

export default ScreenDetail;
