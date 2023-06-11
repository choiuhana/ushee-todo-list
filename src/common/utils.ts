import { Dimensions, FlexStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ImageStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const normalize = (size: number) => {
    const { width } = Dimensions.get("window");

    //가로비율을 기준으로 사이즈를 조정
    const width_ratio = (Math.abs(width - 360) / 360) * (width < 360 ? -1 : 1) + 1;

    //가로길이 1.4배를 넘어갈 경우 사이즈 제한(가운데 정렬)
    if (width_ratio > 1.4) return size * 1.4;

    return size * width_ratio;
};

export const createNormalStyles = <T extends Record<string, StyleProp<any>>>(
    styles: T,
    targetProperties = [
        "fontSize",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "marginHorizontal",
        "marginVertical",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "paddingVertical",
        "paddingHorizontal",
        "width",
        "height",
        "lineHeight",
    ]
) => {
    const normalizedStyles: Record<string, StyleProp<any>> = {};
    Object.keys(styles).forEach((key) => {
        normalizedStyles[key] = {} as StyleProp<any>;
        Object.keys(styles[key]).forEach((property) => {
            if (targetProperties.includes(property)) {
                normalizedStyles[key][property] = normalize(styles[key][property]);
            } else {
                normalizedStyles[key][property] = styles[key][property];
            }
        });
    });

    return StyleSheet.create(normalizedStyles);
};
