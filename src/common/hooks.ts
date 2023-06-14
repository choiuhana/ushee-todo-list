import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../script/redux/store";
import { useRef } from "react";
import { linear } from "@choiuhana/library-react-base/dist/math/TimingFunctions";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type TimingProps = { onTiming: Function; data: { from: number; to: number } };
export const useTimingFunction = (duration: number, fps: number, timingFunc = linear) => {
    const worker = useRef(null);
    const start = ({ onTiming, data }: TimingProps) => {
        stop();

        let interval = 1000 / fps;
        let startTime = getCurrentMillisecond();
        worker.current = setInterval(() => {
            let elapsed_time = getCurrentMillisecond() - startTime;
            let t = elapsed_time / duration;
            if (t > 1) {
                t = 1;
            }
            onTiming && onTiming(timingFunc(t), data);

            if (t >= 1) {
                stop();
            }
        }, interval);
    };

    const stop = () => {
        clearInterval(worker.current);
        worker.current = null;
    };

    const getCurrentMillisecond = () => {
        return new Date().getTime();
    };

    return { start, stop };
};
