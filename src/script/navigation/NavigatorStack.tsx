import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATOR_STACK, NAVIGATOR_TAB_BOTTOM, Params, SCREEN_LOGIN } from "./screens";
import { selectAccount } from "../redux/slice/accountSlice";
import { useAppSelector } from "../../common/hooks";
import ScreenLogin from "../ui/Login/ScreenLogin";
import NavigatorTabBottom from "./NavigatorTabBottom";

const Stack = createNativeStackNavigator<Params[typeof NAVIGATOR_STACK]>();

const NavigatorStack = () => {
    const { login_type } = useAppSelector(selectAccount);
    return (
        <Stack.Navigator>
            {login_type === null ? (
                <React.Fragment>
                    {/*TODO 임시 화면 구분*/}
                    <Stack.Screen name={SCREEN_LOGIN} component={ScreenLogin} />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Stack.Screen name={NAVIGATOR_TAB_BOTTOM} component={NavigatorTabBottom} />
                </React.Fragment>
            )}
        </Stack.Navigator>
    );
};

export default NavigatorStack;
