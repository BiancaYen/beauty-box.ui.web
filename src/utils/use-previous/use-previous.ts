import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T): T => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref: any = useRef<T>(null);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

