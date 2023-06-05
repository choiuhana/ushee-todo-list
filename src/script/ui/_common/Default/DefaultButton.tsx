import React from "react";
import { TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import DefaultText from "./DefaultText";

interface Props extends TouchableOpacityProps {
    textComponent?: React.ElementType | undefined;
    disableFeedback?: boolean | undefined;
    textStyle?: TextStyle | undefined;
    text: string | undefined;
}

const DefaultButton = (props: Props) => {
    const { textComponent, style, disableFeedback, textStyle, text } = props;

    const TextComponentClass = textComponent || DefaultText;

    return (
        <TouchableOpacity
            {...props}
            hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
            activeOpacity={disableFeedback || false ? 1.0 : 0.6}
            style={[{ alignItems: "center", justifyContent: "center" }, style]}>
            <TextComponentClass style={textStyle}>{text}</TextComponentClass>
        </TouchableOpacity>
    );
};

export default DefaultButton;
