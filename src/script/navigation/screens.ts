//navigator
export const NAVIGATOR_TAB_BOTTOM = "NavigatorTabBottom";

export const NAVIGATOR_STACK = "NavigatorStack";

//Screen
export const SCREEN_MAIN = "ScreenMain";
export const SCREEN_CALENDAR = "ScreenCalendar";
export const SCREEN_LOGIN = "ScreenLogin";
export const SCREEN_DETAIL = "ScreenDetail";

export type Params = {
    [NAVIGATOR_STACK]: {
        [SCREEN_LOGIN]: undefined;
        [SCREEN_MAIN]: undefined;
        [SCREEN_CALENDAR]: undefined;
    };
};
