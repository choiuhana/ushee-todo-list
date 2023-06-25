import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATOR_STACK, NAVIGATOR_TAB_BOTTOM, Params, SCREEN_CALENDAR, SCREEN_LOGIN, SCREEN_MAIN } from "./screens";
import { selectAccount } from "../redux/slice/accountSlice";
import { useAppSelector } from "../../common/hooks";
import ScreenLogin from "../ui/Login/ScreenLogin";
import NavigatorTabBottom from "./NavigatorTabBottom";
import ScreenMain from "../ui/Main/ScreenMain";
import ScreenCalendar from "../ui/Calendar/ScreenCalendar";
import { Button } from "react-native";

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
                    <Stack.Screen
                        options={({ route, navigation }) => {
                            return {
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate(SCREEN_CALENDAR)}
                                        title="Info"
                                        color="red"
                                    />
                                ),
                            };
                        }}
                        name={SCREEN_MAIN}
                        component={ScreenMain}
                    />
                    <Stack.Screen name={SCREEN_CALENDAR} component={ScreenCalendar} />
                </React.Fragment>
            )}
        </Stack.Navigator>
    );
};

export default NavigatorStack;
