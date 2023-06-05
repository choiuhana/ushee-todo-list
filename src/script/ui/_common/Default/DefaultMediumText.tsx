import React, { useMemo } from "react";
import { Text, TextProps, TextStyle } from "react-native";

interface Props extends TextProps {
    style?: undefined | TextStyle | TextStyle[];
}

const DefaultMediumText = (props: Props) => {
    const { style, children } = props;

    const fontFamily = useMemo(() => {
        let defaultFont = "Pretendard-Medium";

        if (Array.isArray(style)) {
            const flattenedArr = style.flat(Infinity);
            flattenedArr.forEach((el) => {
                defaultFont = el.fontFamily || defaultFont;
            });
        } else {
            return style?.fontFamily || defaultFont;
        }

        return defaultFont;
    }, [style]);

    return (
        <Text
            {...props}
            allowFontScaling={false} // TODO 비율 대로 마크업 했을 때 바뀔 가능성 있음
            style={[
                style,
                {
                    fontFamily,
                },
            ]}>
            {children}
        </Text>
    );
};

export default DefaultMediumText;
