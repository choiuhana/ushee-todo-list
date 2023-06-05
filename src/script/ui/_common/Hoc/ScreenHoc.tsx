import React, { useMemo } from "react";
import {ScrollView, StyleProp, useWindowDimensions, View, ViewProps, ViewStyle} from "react-native";

/***
 *
 * @param WrappedComponent: hoc 을 사용한 컴포넌트
 * @param config: {vertical_center: Boolean(default: true)}
 */

interface Config {}

const ScreenHoc = <P extends ViewProps>(WrappedComponent: React.ComponentType<P>, config: Config = {}) => {
    return (props: P) => {
        const { width } = useWindowDimensions();

        const CONFIG = {
            //상하정렬 기본값 true
            verticalCenter: true,
            ...config,
        };

        const isHugeScreen = width >= 360 * 1.4;

        const wrappedContentStyle: StyleProp<ViewStyle> = useMemo(() => {
            //TODO 정렬 조건 추후 구현, 현재는 height 줄었을 때 스크롤 기능 만(overflow: "scroll")
            return [
                //큰화면에선 default 가운데 정렬
                isHugeScreen && { alignItems: "center" },
                {
                    flexGrow: 1,
                },
            ];
        }, []);

        return (
            <ScrollView bounces={false} contentContainerStyle={wrappedContentStyle}>
                {/*width default 360 * 1.4배수 504로 제한*/}
                <View style={[{ maxWidth: 504, width: "100%" }, CONFIG.verticalCenter && { height: "100%" }]}>
                    <WrappedComponent {...props} />
                </View>
            </ScrollView>
        );
    };
};

export default ScreenHoc;
