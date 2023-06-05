import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NAVIGATOR_TAB_BOTTOM, Params, SCREEN_DETAIL, SCREEN_MAIN} from "./screens";
import ScreenMain from "../ui/Main/ScreenMain";
import ScreenDetail from "../ui/Detail/ScreenDetail";

const Tab = createBottomTabNavigator<Params[typeof NAVIGATOR_TAB_BOTTOM]>();

const NavigatorBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_MAIN} component={ScreenMain} />
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_DETAIL} component={ScreenDetail} />
        </Tab.Navigator>
    );
};

export default NavigatorBottomTab;
