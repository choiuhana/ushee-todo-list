import React, { ReactNode, useCallback, useMemo } from "react";
import { ScrollView, StyleProp, useWindowDimensions, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import DefaultView from "./Default/DefaultView";
import {normalize} from "../../../common/utils";

interface Props extends ViewProps {
    style?: StyleProp<ViewStyle> | undefined;
    isScroll?: boolean;
    backgroundColor?: string;
    center?: boolean;
}

const Container = (props: Props) => {
    const { style, children, backgroundColor, isScroll, center } = props;

    const { colors } = useTheme();

    const { width } = useWindowDimensions();

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

    const WrapView = useCallback(({ children }: { children: ReactNode }) => {
        if (isScroll) {
            return <DefaultView style={wrappedContentStyle}>{children}</DefaultView>;
        } else {
            return (
                <ScrollView bounces={false} contentContainerStyle={wrappedContentStyle}>
                    {children}
                </ScrollView>
            );
        }
    }, []);

    return (
        <WrapView>
            <DefaultView
                {...props}
                style={[
                    style,
                    { maxWidth: normalize(504), width: "100%" },
                    {
                        ...(center && { alignItems: "center", justifyContent: "center" }),
                        backgroundColor: backgroundColor || colors.background,
                        width: "100%",
                        height: "100%",
                    },
                ]}>
                {children}
            </DefaultView>
        </WrapView>
    );
};

export default Container;
