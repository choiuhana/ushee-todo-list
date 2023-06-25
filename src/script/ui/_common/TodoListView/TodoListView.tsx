import React from "react";
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import DefaultMediumText from "../Default/DefaultMediumText";
import AnimatedLottieView from "lottie-react-native";
import AnimationButtonCheck from "./AnimationButtonCheck";
import { I_useTheme } from "../../../../resource/theme/theme";
import { createNormalStyles } from "../../../../common/utils";
import { useTheme } from "@react-navigation/native";

interface ITodoListView {
    title: string;
}

interface IStyle {
    //
}

const TodoListView = (props: ITodoListView) => {
    const { title } = props;
    const [groupValues, setGroupValues] = React.useState([]);

    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <View>
            <AnimationButtonCheck text={title} />
        </View>
    );
};

const createStyle = (theme: I_useTheme) => {
    return createNormalStyles<IStyle>({
        //
    });
};

export default TodoListView;
