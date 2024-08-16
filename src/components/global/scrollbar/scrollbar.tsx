import React, {
    FC,
    ReactNode,
    useState,
} from 'react';

// Types
interface ScrollbarProps {
    children: ReactNode,
    className: string,
}

export const ScrollWrapper: FC<ScrollbarProps> = ({
    children,
    className,
}) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isScrollingTimer, setIsScrollingTimer] = useState<NodeJS.Timeout | null>(
        null,
    );

    const handleScroll = () => {
        setIsScrolling(true);

        if (isScrollingTimer !== null) {
            clearTimeout(isScrollingTimer);
        }

        const timer = setTimeout(() => {
            setIsScrolling(false);
        }, 900);

        setIsScrollingTimer(timer);
    };

    return (
        <div
            className={`relative flex h-[full] w-[full] overflow-x-hidden overflow-y-scroll ${isScrolling ? 'has-scrollbar' : ''} ${className}`}
            onScroll={handleScroll}
        >
            {children}

            {/* Prevents content from moving slightly with scrollbar dissapearing, scrollbar gutter not supported on safari yet. */}
            {!isScrolling && <div className="h-full w-[4px]" />}
        </div>
    );
};
