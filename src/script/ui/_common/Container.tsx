import React from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import DefaultView from "./Default/DefaultView";
import ScreenHoc from "./Hoc/ScreenHoc";

interface Props extends ViewProps {
    style?: StyleProp<ViewStyle> | undefined;
}

const Container = (props: Props) => {
    const { style, children } = props;

    const { colors } = useTheme();

    return (
        <DefaultView
            {...props}
            style={[
                style,
                {
                    backgroundColor: colors.background,
                    width: "100%",
                    height: "100%",
                },
            ]}>
            {children}
        </DefaultView>
    );
};

export default ScreenHoc(Container);
