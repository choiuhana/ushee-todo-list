import { AppRegistry, useColorScheme } from "react-native";
import App from "./src/script/App";
import { name as appName } from "./src/script/app.json";
import { NavigationContainer } from "@react-navigation/native";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import dark_theme from "./src/resource/theme/dark";
import light_theme from "./src/resource/theme/light";
import store from "./src/script/redux/store";
import {BroadcastContextProvider} from "@choiuhana/library-react-base";

const Root = () => {
    const is_dark_mode = useColorScheme() === "dark";

    const persist = persistStore(store);

    return (
        <BroadcastContextProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <NavigationContainer
                        onReady={() => {
                            // Log.private('NavigationContainer ready');
                        }}
                        theme={is_dark_mode ? dark_theme : light_theme}>
                        <App />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </BroadcastContextProvider>
    );
};
AppRegistry.registerComponent(appName, () => Root);
