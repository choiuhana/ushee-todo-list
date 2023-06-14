import React, { useCallback } from "react";
import {FlatList, StyleProp, StyleSheet, TextStyle, ViewStyle} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_MAIN } from "../../navigation/screens";
import Container from "../_common/Container";
import TodoListView from "../_common/TodoListView/TodoListView";
import { createNormalStyles } from "../../../common/utils";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_MAIN>;

//@TODO 전역
const data = [
    {
        title: "제목입니다",
    },
];

interface IStyle {
    list: StyleProp<ViewStyle>;
}

const ScreenMain = ({ route, navigation }: Props) => {
    const renderItem = useCallback(({ item }: { item: { title: string } }) => {
        return <TodoListView {...item} />;
    }, []);

    const styles = createStyle();

    return (
        <Container isScroll={true}>
            <FlatList contentContainerStyle={styles.list} data={data} renderItem={renderItem} />
        </Container>
    );
};

const createStyle = () => {
    return createNormalStyles<IStyle>({
        list: {
            paddingHorizontal: 24,
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
