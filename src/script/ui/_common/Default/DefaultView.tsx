import React from "react";
import { View, ViewProps } from "react-native";

const DefaultView = (props: ViewProps) => {
    const { children } = props;
    return <View {...props}>{children}</View>;
};

export default DefaultView;
