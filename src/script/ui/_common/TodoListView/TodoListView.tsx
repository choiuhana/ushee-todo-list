import React from "react";
import { StyleSheet } from "react-native";
import DefaultMediumText from "../Default/DefaultMediumText";
import AnimatedLottieView from "lottie-react-native";
import AnimationButtonCheck from "./AnimationButtonCheck";

interface ITodoListView {
    title: string;
}

const TodoListView = (props: ITodoListView) => {
    const { title } = props;
    const [groupValues, setGroupValues] = React.useState([]);

    return (
        <>
            <AnimationButtonCheck />
            <DefaultMediumText style={styles.titleText}>{title}</DefaultMediumText>
        </>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
    },
});

export default TodoListView;
