import React, { useCallback } from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NAVIGATOR_STACK, Params, SCREEN_MAIN } from "../../navigation/screens";
import Container from "../_common/Container";
import TodoListView from "../_common/TodoListView/TodoListView";
import { createNormalStyles } from "../../../common/utils";
import { useTheme } from "@react-navigation/native";
import { I_useTheme } from "../../../resource/theme/theme";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_STACK], typeof SCREEN_MAIN>;

//@TODO 전역
const data = [
    {
        title: "제목입니다",
    },
];

interface IStyle {
    list: StyleProp<ViewStyle>;
    contentContainer: StyleProp<ViewStyle>;
}

const ScreenMain = ({ route, navigation }: Props) => {
    const renderItem = useCallback(({ item }: { item: { title: string } }) => {
        return <TodoListView {...item} />;
    }, []);

    const theme = useTheme();

    const styles = createStyle(theme);

    return (
        <Container isScroll={true}>
            <FlatList contentContainerStyle={styles.contentContainer} data={data} renderItem={renderItem} />
        </Container>
    );
};

const createStyle = (theme: I_useTheme) => {
    return createNormalStyles<IStyle>({
        list: {
            backgroundColor: theme.colors.background,
        },
        contentContainer: {
            backgroundColor: theme.colors.background,
        },
    });
};
export default ScreenMain;

//@TODO logout
//<DefaultButton
//                 text={"Logout"}
//                 textStyle={{
//                     color: colors.on_primary,
//                 }}
//                 style={{ backgroundColor: colors.primary }}
//                 onPress={() => {
//                     dispatch(resetAll());
//                 }}
//             />

//@TODO brodcast exsample
//const { unlisten, listen } = useBroadcastContext();
//   useEffect(() => {
//         const l = listen("test", (affectedKey, value) => {
//             console.log("??@");
//             setNumber(2);
//         });
//         return () => unlisten(l);
//     }, []);
