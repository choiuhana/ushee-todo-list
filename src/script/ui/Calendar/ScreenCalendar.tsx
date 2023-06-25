import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../../../common/hooks";
import { setLoginType } from "../../redux/slice/accountSlice";
import { NAVIGATOR_STACK, Params, SCREEN_CALENDAR, SCREEN_LOGIN } from "../../navigation/screens";
import DefaultText from "../_common/Default/DefaultText";
import DefaultButton from "../_common/Default/DefaultButton";
import { Calendar } from "react-native-calendars";
import TodoListView from "../_common/TodoListView/TodoListView";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_STACK], typeof SCREEN_CALENDAR>;

const ScreenCalendar = ({ route, navigation }: Props) => {
    const [selected, setSelected] = useState("");

    return (
        <>
            <Calendar
                onDayPress={(day) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedColor: "orange" },
                }}
            />
            <TodoListView title={" ㅌㅏ이틀"} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    greeting: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 16,
    },
});

export default ScreenCalendar;
