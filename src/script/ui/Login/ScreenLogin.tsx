import React from "react";
import { StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../../../common/hooks";
import { setLoginType } from "../../redux/slice/accountSlice";
import { NAVIGATOR_STACK, Params, SCREEN_LOGIN } from "../../navigation/screens";
import DefaultText from "../_common/Default/DefaultText";
import DefaultButton from "../_common/Default/DefaultButton";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_STACK], typeof SCREEN_LOGIN>;

const ScreenLogin = ({ route, navigation }: Props) => {
    const dispatch = useAppDispatch();
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <DefaultText style={[styles.greeting, { color: colors.typo.title }]}>Login Screen</DefaultText>
            <DefaultButton
                text={"login"}
                textStyle={{ fontSize: 18 }}
                onPress={() => {
                    dispatch(setLoginType("email"));
                }}
                style={{ backgroundColor: colors.background, width: 100, height: 50, borderRadius: 10 }}
            />
        </View>
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
        fontWeight: "bold",
        margin: 16,
    },
});

export default ScreenLogin;
