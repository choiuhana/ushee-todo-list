import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { lerp } from "@choiuhana/library-react-base/dist/math/MathUtils";
import { easeOutQuart } from "@choiuhana/library-react-base/dist/math/TimingFunctions";
import { useTimingFunction } from "../../../../common/hooks";

interface IAnimationCheck {
    isChecked?: boolean;
}

const AnimationButtonCheck = (props: IAnimationCheck) => {
    const { isChecked } = props;
    const value = useRef(0);
    const animationProgress = useRef(new Animated.Value(value.current));

    // @TODO is check 구현
    const isCheck = useRef(isChecked);

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
                    start({
                        data: {
                            from: value.current,
                            to: 0,
                        },
                        onTiming: (t: number, data: { from: number; to: number }) => {
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

    const { start, stop } = useTimingFunction(1500, 120, easeOutQuart);

    const { start: resetStart } = useTimingFunction(300, 120);

    const reset = () => {
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

    return (
        <>
            <View {...panResponder.panHandlers}>
                <AnimatedLottieView
                    source={require("../../../../resource/animation/check-mark.json")}
                    progress={animationProgress.current}
                    style={styles.check}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    check: {
        width: 120,
        height: 120,
    },
});

export default AnimationButtonCheck;
