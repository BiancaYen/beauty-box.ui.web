import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

export const useHorizontalSwipe = () => {
    const [positionLeft, setPositionLeft] = useState<number>(0);
    const touchPosition = useRef(0);

    const scrollingAreaRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    // Utils
    const shouldScroll = useCallback((): boolean => {
        if (
            !scrollingAreaRef.current
            || !wrapperRef.current
        ) {
            return false;
        }

        return scrollingAreaRef.current.clientWidth > wrapperRef.current.clientWidth;
    }, []);

    // Setters
    const setTabsScroll = useCallback((step: number = 0): void => {
        if (shouldScroll()) {
            setPositionLeft((currentPosition) => {
                const nextLeftPosition = currentPosition + step;
                if (scrollingAreaRef.current && wrapperRef.current) {
                    if (nextLeftPosition > 0) {
                        return 0;
                    }

                    const calculatedLeftPosition = wrapperRef.current.clientWidth - scrollingAreaRef.current.clientWidth;

                    return nextLeftPosition <= calculatedLeftPosition
                        ? calculatedLeftPosition
                        : nextLeftPosition;
                }
                return 0;
            });
        }
    }, [shouldScroll]);

    // Handlers
    const handleResize = useCallback((): void => {
        if (!shouldScroll()) {
            setPositionLeft(0);
        }
    }, [shouldScroll]);

    const handleScroll = useCallback((event: WheelEvent): void => {
        event.preventDefault();
        setTabsScroll(-event.deltaY);
    }, [setTabsScroll]);

    const handleTouchStart = useCallback((event: TouchEvent): void => {
        touchPosition.current = event.changedTouches[0].pageX;
    }, []);

    const handleTouchEnd = useCallback((event: TouchEvent): void => {
        event.preventDefault();
        const delta = event.changedTouches[0].pageX - touchPosition.current;
        touchPosition.current = event.changedTouches[0].pageX;
        setTabsScroll(delta);
    }, [setTabsScroll]);

    useEffect(() => {
        const currentWrapperRef = wrapperRef.current;
        if (currentWrapperRef) {
            currentWrapperRef.addEventListener('wheel', handleScroll);
            currentWrapperRef.addEventListener('touchstart', handleTouchStart);
            currentWrapperRef.addEventListener('touchmove', handleTouchEnd);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            if (currentWrapperRef) {
                currentWrapperRef.removeEventListener('wheel', handleScroll);
                currentWrapperRef.removeEventListener('touchstart', handleTouchStart);
                currentWrapperRef.removeEventListener('touchmove', handleTouchEnd);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize, handleScroll, handleTouchStart, handleTouchEnd]);

    return {
        positionLeft,
        scrollingAreaRef,
        wrapperRef,
    };
};
