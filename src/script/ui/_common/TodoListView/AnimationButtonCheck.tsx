import React, { ReactElement, useRef, useState } from "react";
import { Animated, PanResponder, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { lerp } from "@choiuhana/library-react-base/dist/math/MathUtils";
import { easeOutQuart } from "@choiuhana/library-react-base/dist/math/TimingFunctions";
import { useTimingFunction } from "../../../../common/hooks";
import { createNormalStyles } from "../../../../common/utils";
import DefaultMediumText from "../Default/DefaultMediumText";
import { useTheme } from "@react-navigation/native";
import { I_useTheme } from "../../../../resource/theme/theme";

interface IAnimationCheck {
    isChecked?: boolean;
    text: string;
}

interface IStyle {
    container: StyleProp<ViewStyle>;
    check: StyleProp<ViewStyle>;
    textWrap: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
}

const AnimationButtonCheck = (props: IAnimationCheck) => {
    const { isChecked, text } = props;
    const value = useRef(0);
    const animationProgress = useRef(new Animated.Value(value.current));

    const theme = useTheme();
    const styles = createStyle(theme);

    // @TODO is check 구현
    const isCheck = useRef(isChecked);

    // @TODO 진동
    const panResponder = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },

            onPanResponderGrant: (evt, gestureState) => {
                if (value.current !== 0) {
                    setScaleValue(0.95);
                    start({
                        data: {
                            from: value.current,
                            to: 0,
                        },
                        onTiming: (t: number, data: { from: number; to: number }) => {
                            if (t === 1) setScaleValue(1);
                            value.current = lerp(data.from, data.to, t);
                            animationProgress.current.setValue(value.current);
                        },
                    });
                } else {
                    value.current = 1;
                    animationProgress.current.setValue(1);
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                reset();
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
                reset();
            },
        })
    ).current;

    const { start, stop } = useTimingFunction(1200, 120, easeOutQuart);

    const { start: resetStart } = useTimingFunction(300, 120);

    const reset = () => {
        setScaleValue(1);
        if (value.current === 0) return;
        stop();
        resetStart({
            data: {
                from: value.current,
                to: 1,
            },
            onTiming: (t: number, data: { from: number; to: number }) => {
                value.current = lerp(data.from, data.to, t);
                animationProgress.current.setValue(value.current);
            },
        });
    };

    const [scaleValue, setScaleValue] = useState(1);

    return (
        // @TODO HStack
        <View {...panResponder.panHandlers} style={styles.container}>
            <View>
                <AnimatedLottieView
                    source={require("../../../../resource/animation/check-mark.json")}
                    progress={animationProgress.current}
                    resizeMode={"contain"}
                    style={[
                        styles.check,
                        {
                            transform: [{ scale: scaleValue }],
                        },
                    ]}
                />
            </View>
            <View
                style={[
                    styles.textWrap,
                    {
                        transform: [{ scale: scaleValue }],
                    },
                ]}>
                <DefaultMediumText numberOfLines={1} style={styles.text}>
                    {text}
                </DefaultMediumText>
            </View>
        </View>
    );
};

const createStyle = (theme: I_useTheme): IStyle => {
    return createNormalStyles<IStyle>({
        container: {
            flexDirection: "row",
            paddingTop: 8,
        },
        check: {
            width: 45,
            height: 45,
            marginRight: -6,
        },
        textWrap: {
            flex: 1,
            justifyContent: "center",
            marginRight: 24,
            borderBottomWidth: 1,
            borderColor: theme.colors.surface_variant,
        },
        text: {
            fontSize: 18,
            color: theme.colors.typo.title,
        },
    });
};
export default AnimationButtonCheck;
