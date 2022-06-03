import { useEffect, useRef } from "react";

type Callback = () => void | any;

export const useInterval = (callback: Callback, delay: number) => {
    const savedCallback = useRef<Callback>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export const useInit = (callback: Callback) => {
    const ref = useRef(false);
    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
            callback();
        }
    });
};
