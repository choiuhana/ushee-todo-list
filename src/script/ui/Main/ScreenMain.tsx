import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../../../common/hooks";
import { resetAll } from "../../redux/slice/accountSlice";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_DETAIL, SCREEN_MAIN } from "../../navigation/screens";
import Container from "../_common/Container";
import DefaultText from "../_common/Default/DefaultText";
import DefaultButton from "../_common/Default/DefaultButton";
import { sleep, useBroadcastContext } from "@choiuhana/library-react-base";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_MAIN>;

const ScreenMain = ({ route, navigation }: Props) => {
    const dispatch = useAppDispatch();
    const { colors } = useTheme();
    const { unlisten, listen } = useBroadcastContext();

    const [number, setNumber] = useState(0);

    useEffect(() => {
        const l = listen("test", (affectedKey, value) => {
            console.log("??@");
            setNumber(2);
        });
        return () => unlisten(l);
    }, []);

    console.log(sleep);

    return (
        <Container style={styles.container}>
            <DefaultText style={styles.greeting}>Main Screen</DefaultText>
            <DefaultText style={styles.greeting}>{number}</DefaultText>

            <DefaultButton
                text={"Go Detail"}
                textStyle={{
                    color: colors.on_primary,
                }}
                style={{ backgroundColor: colors.primary }}
                onPress={() => {
                    navigation.navigate(SCREEN_DETAIL);
                }}
            />

            <DefaultButton
                text={"Logout"}
                textStyle={{
                    color: colors.on_primary,
                }}
                style={{ backgroundColor: colors.primary }}
                onPress={() => {
                    dispatch(resetAll());
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

export default ScreenMain;
